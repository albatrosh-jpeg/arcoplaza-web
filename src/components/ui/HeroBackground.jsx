export default function HeroBackground() {

  return (

    <div className="absolute inset-0 overflow-hidden">

      {/* IMAGE */}

      <img
        src="/hero-energy.png"
        alt="Arcoplaza Energy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-right
          opacity-95
        "
      />

      {/* LEFT GRADIENT */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-[#f8f6f1]
          via-[#f8f6f1]/92
          via-35%
          to-transparent
        "
      />

      {/* ATMOSPHERIC LIGHT */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_45%)]
        "
      />

    </div>

  )

}