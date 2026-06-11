import crypto from 'crypto'

const CLIENT_ID = process.env.GITHUB_CLIENT_ID
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

const COOKIE_NAME = 'github_oauth_state'

function parseCookies(cookieHeader = '') {
  return Object.fromEntries(
    cookieHeader
      .split(';')
      .map((cookie) => cookie.trim())
      .filter(Boolean)
      .map((cookie) => {
        const [name, ...value] = cookie.split('=')
        return [name, decodeURIComponent(value.join('='))]
      })
  )
}

function getBaseUrl(req) {
  const proto = req.headers['x-forwarded-proto']?.split(',')[0] || 'https'
  const host = req.headers.host
  return `${proto}://${host}`
}

function redirectTo(res, location, cookie) {
  const headers = { Location: location }
  if (cookie) headers['Set-Cookie'] = cookie
  res.writeHead(302, headers)
  res.end()
}

function sendHtml(res, html) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.end(html)
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.statusCode = 405
    res.setHeader('Allow', 'GET')
    res.end('Method Not Allowed')
    return
  }

  if (!CLIENT_ID || !CLIENT_SECRET) {
    res.statusCode = 500
    res.end('GitHub OAuth credentials are not configured')
    return
  }

  const baseUrl = getBaseUrl(req)
  const redirectUri = `${baseUrl}/api/auth`
  const url = new URL(req.url, baseUrl)
  const code = url.searchParams.get('code')
  const stateParam = url.searchParams.get('state')

  if (!code) {
    const state = crypto.randomBytes(16).toString('hex')
    const authUrl = new URL('https://github.com/login/oauth/authorize')
    authUrl.searchParams.set('client_id', CLIENT_ID)
    authUrl.searchParams.set('redirect_uri', redirectUri)
    authUrl.searchParams.set('scope', 'repo')
    authUrl.searchParams.set('state', state)

    const cookie = `${COOKIE_NAME}=${state}; Path=/api/auth; HttpOnly; Secure; SameSite=Lax`
    redirectTo(res, authUrl.toString(), cookie)
    return
  }

  const cookies = parseCookies(req.headers.cookie || '')
  const storedState = cookies[COOKIE_NAME]
  if (!storedState || storedState !== stateParam) {
    res.statusCode = 400
    res.end('Invalid OAuth state')
    return
  }

  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
      redirect_uri: redirectUri,
      state: stateParam,
    }),
  })

  const tokenData = await tokenResponse.json()
  if (!tokenData.access_token) {
    res.statusCode = 500
    res.end('Failed to obtain GitHub access token')
    return
  }

  const html = `<!doctype html>
<html>
  <body>
    <script>
      const message = { provider: 'github', token: '${tokenData.access_token}' };
      window.opener.postMessage(message, window.location.origin);
      window.close();
    </script>
  </body>
</html>`

  sendHtml(res, html)
}
