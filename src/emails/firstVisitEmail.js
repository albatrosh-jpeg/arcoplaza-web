export const firstVisitEmail = ({
  clientName,
  omiePrice,
  omieComment,
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

        <div style="
          margin-top:40px;
          padding:32px;
          border:1px solid #E5E7EB;
          border-radius:24px;
          background:#FCFBF8;
        ">

          <div style="
            font-size:12px;
            letter-spacing:2px;
            text-transform:uppercase;
            color:#7C8795;
            margin-bottom:8px;
          ">
            Mercado eléctrico Ibérico
          </div>

          <div style="
            font-size:13px;
            color:#94A3B8;
            margin-bottom:26px;
          ">
            ${new Date().toLocaleDateString(
              'es-ES',
              {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
              }
            )}
          </div>
          <div style="
              font-size:14px;
              color:#556274;
              margin-bottom:24px;
            ">
              SPEL Base Week · OMIP
            </div>

          <div style="
            width:140px;
            height:140px;
            margin:0 auto 28px auto;
            border-radius:999px;
            border:5px solid #7DB7E8;
            box-shadow:
              inset 0 0 0 8px #EDF5FC;
            display:flex;
            align-items:center;
            justify-content:center;
            background:white;
          ">

            <div style="
              text-align:center;
              padding-top:12px;
              box-sizing:border-box;
            ">

              <div style="
                font-size:42px;
                line-height:1;
                color:#163A70;
                font-weight:300;
              ">
                ${omiePrice}
              </div>

              <div style="
                font-size:16px;
                color:#7C8795;
                margin-top:12px;
              ">
                €/MWh
              </div>

            </div>

          </div>


          <div style="
            margin-top:28px;
            font-size:15px;
            line-height:1.8;
            color:#556274;
          ">
            ${omieComment}
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