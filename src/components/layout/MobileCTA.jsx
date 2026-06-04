export default function MobileCTA() {

  return (

    <div
      className="
        fixed
        bottom-4
        inset-x-0
        z-50

        px-4

        md:hidden
      "
    >

      <div className="max-w-[340px] mx-auto">

        <a
          href="#formulario"
          className="
            flex
            items-center
            justify-center

            rounded-[18px]

            bg-corporate

            px-5
            py-3

            text-[15px]
            font-medium
            text-white

            shadow-[0_10px_30px_rgba(16,37,66,0.16)]

            transition-all
            duration-300

            active:scale-[0.98]
          "
        >

          Solicitar análisis gratuito

        </a>

      </div>

    </div>

  )

}