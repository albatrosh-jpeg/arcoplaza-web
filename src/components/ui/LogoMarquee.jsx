export default function LogoMarquee({
  items
}) {

  return (

    <div className="relative overflow-hidden">

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fcfbf8] to-transparent z-10" />

      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fcfbf8] to-transparent z-10" />

      <div className="flex logo-slider">

        {[...items, ...items].map((item, index) => (

          <div
            key={`${item.name}-${index}`}
            className="flex items-center justify-center min-w-[220px] px-10 py-8"
          >

            <img
              src={item.logo}
              alt={item.name}
              className={`
                ${
                  item.name === 'Candela Energía' ||
                  item.name === 'Factor Energía' ||
                  item.name === 'Energya VM'
                    ? 'h-14'
                    : item.name === 'Plenitude' ||
                      item.name === 'Repsol'
                    ? 'h-16'
                    : 'h-10'
                }
                w-auto
                object-contain
                grayscale
                opacity-70
                hover:grayscale-0
                hover:opacity-100
                transition-all
                duration-300
              `}
            />

          </div>

        ))}

      </div>

    </div>

  )

}