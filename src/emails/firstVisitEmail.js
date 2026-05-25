export const firstVisitEmail = ({
  clientName,
  omiePrice,
  omieComment
}) => {

  return `

  <div
    style="
      font-family: Arial, sans-serif;
      max-width: 640px;
      margin: auto;
      padding: 40px;
      color: #111;
      line-height: 1.6;
    "
  >

    <h1
      style="
        font-size: 28px;
        margin-bottom: 24px;
      "
    >
      Gracias por recibirnos
    </h1>

    <p>
      Hola ${clientName},
    </p>

    <p>
      Desde Arcoplaza Asesores ayudamos a empresas
      y negocios a detectar sobrecostes,
      optimizar contratos eléctricos y mejorar
      las condiciones de suministro energético.
    </p>

    <p>
      Nuestro equipo realiza revisiones técnicas
      independientes orientadas a:
    </p>

    <ul>
      <li>Optimización de potencia</li>
      <li>Revisión tarifaria</li>
      <li>Detección de penalizaciones</li>
      <li>Estudio de mercado energético</li>
    </ul>

    <div style="margin: 40px 0;">

      <a
        href="https://www.arcoplazaasesores.com/contacto"
        style="
          background: #111111;
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
        "
      >
        Solicitar revisión energética
      </a>

    </div>

    <div
      style="
        margin-top: 48px;
        padding: 24px;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        background: #fafafa;
      "
    >

      <h3 style="margin-top: 0;">
        Actualización mercado eléctrico
      </h3>

      <p>
        <strong>Precio OMIE:</strong>
        ${omiePrice} €/MWh
      </p>

      <p>
        ${omieComment}
      </p>

    </div>

  </div>

  `
}