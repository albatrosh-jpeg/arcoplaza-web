export const firstVisitEmail = ({
  clientName,
  marketPrice,
  marketComment,
  customMessage
}) => {

  return `

  <div
    style="
      margin:0;
      padding:48px 20px;
      background:#F8F6F1;
      font-family:Inter,Arial,sans-serif;
    "
  >

    <div
      style="
        max-width:640px;
        margin:auto;
        background:#FFFFFF;
        border:1px solid #ECE7DD;
        border-radius:20px;
        overflow:hidden;
      "
    >

      <div
        style="
          padding:44px 44px 36px;
          background:#FCFBF8;
          border-bottom:1px solid #ECE7DD;
        "
      >

<img
  src="https://www.arcoplazaasesores.com/logo-arcoplaza.png"
  alt="Arcoplaza Asesores"
  style="
    width:180px;
    height:auto;
    display:block;
    margin-bottom:28px;
  "
/>

        <h1
          style="
            margin:0;
            font-family:'Cormorant Garamond',serif;
            font-size:34px;
            line-height:1.05;
            font-weight:500;
            letter-spacing:-0.03em;
            color:#18375D;
          "
        >
          Gracias por recibirnos
        </h1>

      </div>

      <div
        style="
          padding:48px 44px;
          font-size:16px;
          line-height:1.9;
          color:#556274;
        "
      >

        <p
          style="
            margin-top:0;
            margin-bottom:28px;
          "
        >
          Hola ${clientName},
        </p>

        <div
          style="
            margin-bottom:36px;
            white-space:pre-line;
            font-size:16px;
            line-height:1.9;
            color:#556274;
          "
        >
          ${customMessage}
        </div>

        <div
          style="
            background:#FCFBF8;
            border:1px solid #ECE7DD;
            border-radius:16px;
            padding:32px;
            margin:42px 0;
          "
        >

          <div
            style="
              font-size:12px;
              letter-spacing:1.5px;
              text-transform:uppercase;
              color:#7C8795;
              margin-bottom:22px;
              font-weight:700;
            "
          >
            Áreas de análisis
          </div>

          <table
            width="100%"
            cellpadding="0"
            cellspacing="0"
            style="
              border-collapse:collapse;
              font-size:15px;
              color:#18375D;
            "
          >

            <tr>
              <td style="padding:10px 0;">
                Optimización de potencia
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                Revisión tarifaria
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                Detección de penalizaciones
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                Comparativa de mercado energético
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0;">
                Análisis de excesos y permanencias
              </td>
            </tr>

          </table>

        </div>

        <div
          style="
            text-align:center;
            margin:52px 0;
          "
        >

          <a
            href="https://www.arcoplazaasesores.com/"
            style="
              display:inline-block;
              background:#18375D;
              color:#ffffff;
              text-decoration:none;
              padding:16px 34px;
              border-radius:12px;
              font-size:15px;
              font-weight:600;
            "
          >
            Solicitar revisión energética
          </a>
        <div
            style="
              text-align:center;
              margin-top:18px;
            "
          >

            <a
              href="https://www.arcoplazaasesores.com/mercado"
              style="
                font-size:14px;
                color:#163A70;
                text-decoration:none;
              "
            >
              Ver mercado energético actualizado →
            </a>

          </div>
        </div>

<div
  style="
    margin-top:48px;
    text-align:center;
  "
>

  <div
    style="
      display:inline-block;
      background:#FCFBF8;
      border:1px solid #ECE7DD;
      border-radius:24px;
      padding:28px 32px;
    "
  >

    <div
      style="
        font-size:11px;
        letter-spacing:2px;
        text-transform:uppercase;
        color:#7C8795;
        margin-bottom:20px;
        font-weight:700;
      "
    >
      Mercado eléctrico ibérico
    </div>

    <img
      src="https://www.arcoplazaasesores.com/api/market-image"
      alt="Mercado energético"
      width="162"
      height="162"
      style="
        display:block;
        width:162px;
        height:162px;
        margin:auto;
      "
    />

    <div
      style="
        margin-top:18px;
        font-size:13px;
        color:#7C8795;
        line-height:1.7;
      "
    >
      Referencia semanal OMIP
    </div>

  </div>

</div>
        <div
          style="
            margin-top:56px;
            padding-top:28px;
            border-top:1px solid #ECE7DD;
            font-size:14px;
            line-height:1.8;
            color:#7C8795;
          "
        >

          <strong
            style="
              color:#18375D;
            "
          >
            Arcoplaza Asesores
          </strong>

          <br/>

          Consultoría y optimización energética

        </div>

      </div>

    </div>

  </div>

  `

}