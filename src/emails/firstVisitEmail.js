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
          padding:40px 44px 32px;
          background:#FCFBF8;
          border-bottom:1px solid #ECE7DD;
        "
      >

      <a
        href="https://www.arcoplazaasesores.com/"
        target="_blank"
        style="
          text-decoration:none;
          border:0;
          display:inline-block;
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

      </a>

        <h1
          style="
            margin:0;
            font-family:'Cormorant Garamond',serif;
            font-size:30px;
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
            line-height:1.85;
            color:#556274;
          "
        >
          ${customMessage}
        </div>

      <div
  style="
    margin:40px 0;
  "
>

  <h2
    style="
      margin:0 0 24px 0;
      font-size:24px;
      line-height:1.2;
      font-weight:600;
      letter-spacing:-0.03em;
      color:#18375D;
      font-family:Inter,Arial,sans-serif;
    "
  >
    Dónde solemos encontrar ahorro
  </h2>

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
  >

    <tr>

      <td
        style="
          background:#FCFBF8;
          border:1px solid #ECE7DD;
          border-radius:16px;
          padding:22px;
        "
      >

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
        >

          <tr>

            <td
              width="46"
              valign="top"
            >

              <div
                style="
                  width:34px;
                  height:34px;
                  border-radius:17px;
                  background:#EAF6E7;
                  text-align:center;
                  line-height:34px;
                  font-size:17px;
                  color:#5BA449;
                  font-weight:700;
                "
              >
                ⌚
              </div>

            </td>

            <td valign="top">

              <div
                style="
                  font-size:15px;
                  line-height:22px;
                  font-weight:700;
                  color:#18375D;
                "
              >
                Contratos renovados automáticamente
              </div>

              <div
                style="
                  margin-top:8px;
                  font-size:14px;
                  line-height:24px;
                  color:#556274;
                "
              >
                Muchas empresas mantienen precios firmados cuando el mercado energético estaba más alto.
              </div>

            </td>

          </tr>

        </table>

      </td>

    </tr>

    <tr>
      <td height="14"></td>
    </tr>

    <tr>

      <td
        style="
          background:#FCFBF8;
          border:1px solid #ECE7DD;
          border-radius:16px;
          padding:22px;
        "
      >

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
        >

          <tr>

            <td
              width="46"
              valign="top"
            >

              <div
                style="
                  width:34px;
                  height:34px;
                  border-radius:17px;
                  background:#EAF6E7;
                  text-align:center;
                  line-height:34px;
                  font-size:17px;
                  color:#5BA449;
                  font-weight:700;
                "
              >
                ▦
              </div>

            </td>

            <td valign="top">

              <div
                style="
                  font-size:15px;
                  line-height:22px;
                  font-weight:700;
                  color:#18375D;
                "
              >
                Condiciones poco competitivas
              </div>

              <div
                style="
                  margin-top:8px;
                  font-size:14px;
                  line-height:24px;
                  color:#556274;
                "
              >
                Tarifas y márgenes que incrementan el coste final sin resultar evidentes.
              </div>

            </td>

          </tr>

        </table>

      </td>

    </tr>

    <tr>
      <td height="14"></td>
    </tr>

    <tr>

      <td
        style="
          background:#FCFBF8;
          border:1px solid #ECE7DD;
          border-radius:16px;
          padding:22px;
        "
      >

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
        >

          <tr>

            <td
              width="46"
              valign="top"
            >

              <div
                style="
                  width:34px;
                  height:34px;
                  border-radius:17px;
                  background:#EAF6E7;
                  text-align:center;
                  line-height:34px;
                  font-size:17px;
                  color:#5BA449;
                  font-weight:700;
                "
              >
                ⚡
              </div>

            </td>

            <td valign="top">

              <div
                style="
                  font-size:15px;
                  line-height:22px;
                  font-weight:700;
                  color:#18375D;
                "
              >
                Potencias mal ajustadas
              </div>

              <div
                style="
                  margin-top:8px;
                  font-size:14px;
                  line-height:24px;
                  color:#556274;
                "
              >
                Sobrecostes recurrentes por configuraciones alejadas del consumo real.
              </div>

            </td>

          </tr>

        </table>

      </td>

    </tr>

  </table>

</div>

<div
  style="
    background:#FCFBF8;
    border:1px solid #ECE7DD;
    border-radius:18px;
    padding:36px 32px;
    text-align:center;
    margin:42px 0;
  "
>

  <div
    style="
      font-size:28px;
      line-height:1.2;
      font-weight:600;
      letter-spacing:-0.03em;
      color:#18375D;
      margin-bottom:14px;
    "
  >
    ¿Revisamos vuestro contrato energético?
  </div>

  <div
    style="
      font-size:15px;
      line-height:28px;
      color:#556274;
      max-width:420px;
      margin:0 auto;
    "
  >
    Podemos revisar condiciones, potencias y precios actuales para detectar posibles sobrecostes.
  </div>

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
      margin-top:28px;
    "
  >
    Solicitar revisión energética
  </a>

  <div
    style="
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
      Ver análisis de mercado →
    </a>

  </div>

</div>

<div
  style="
    margin-top:36px;
    text-align:center;
  "
>

  <div
    style="
      display:block;
      width:100%;
      box-sizing:border-box;
      background:#FCFBF8;
      border:1px solid #ECE7DD;
      border-radius:24px;
      padding:24px;
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

    <div
  style="
    background:#F3F8F1;
    border:1px solid #DDEBD7;
    border-radius:14px;
    padding:14px 16px;
    margin-bottom:26px;
    text-align:left;
  "
>

  <table
    cellpadding="0"
    cellspacing="0"
    border="0"
  >

    <tr>

      <td
        valign="top"
        width="18"
        style="
          padding-top:2px;
        "
      >

        <div
          style="
            width:8px;
            height:8px;
            border-radius:50%;
            background:#6BCB5B;
          "
        ></div>

      </td>

      <td
        valign="top"
        style="
          font-size:14px;
          line-height:24px;
          color:#3E4B5B;
        "
      >

        ${marketComment}

      </td>

    </tr>

  </table>

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

        <a
          href="https://www.arcoplazaasesores.com/"
          target="_blank"
          style="
            color:#18375D;
            text-decoration:none;
            font-weight:700;
          "
        >
          Arcoplaza Asesores
        </a>

          <br/>

          Consultoría y optimización energética

        </div>

      </div>

    </div>

  </div>

  `

}