import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const formData = await req.formData()

    const nombre = formData.get('nombre')
    const telefono = formData.get('telefono')
    const email = formData.get('email')
    const comentario = formData.get('comentario')
    const factura = formData.get('factura')

    let attachments = []

    if (factura && factura.size > 0) {
      const bytes = await factura.arrayBuffer()

      attachments.push({
        filename: factura.name,
        content: Buffer.from(bytes).toString('base64')
      })
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'aaff@centralenergyasesores.com',
      subject: 'Nueva solicitud desde Arcoplaza',
      html: `
        <h2>Nueva solicitud</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Comentario:</strong> ${comentario}</p>
      `,
      attachments
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error(error)

    return Response.json(
      { success: false },
      { status: 500 }
    )
  }
}
