export default function HeroBackground() {

  return (

    <div className="absolute inset-0 overflow-hidden">

      {/* IMAGE */}

      <img
        src="/hero-energy.webp"
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

      {/* GLOBAL SOFT OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-[#f8f6f1]/38
        "
      />

      {/* LEFT GRADIENT */}

      <div
        className="
          absolute
          inset-0
          
          bg-gradient-to-r
          from-[#f8f6f1]
          via-[#f8f6f1]/10
          via-55%
          to-transparent
        "
      />

{/* RIGHT GRADIENT */}

<div
  className="
          absolute
          inset-0

          bg-gradient-to-l
          from-[#f8f6f1]
          via-[#f8f6f1]/10
          via-50%
          to-transparent
  "
/>
      {/* ATMOSPHERIC LIGHT */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(249, 250, 216, 0.9),transparent_45%)]
        "
      />

    </div>

  )

}