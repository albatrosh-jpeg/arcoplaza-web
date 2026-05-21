import { Upload } from 'lucide-react'

export default function FileUpload({
  fileName,
  setFileName
}) {

  return (

    <label className="block cursor-pointer">

      <div
        className="
          bg-white

          border
          border-border-soft

          hover:border-corporateGreen

          transition-colors

          rounded-[16px]

          px-5
          py-5

          text-center
        "
      >

        <Upload
          className="
            w-5
            h-5

            mx-auto
            mb-3

            text-corporateGreen
          "
        />

        <div
          className="
            text-[16px]
            font-medium

            tracking-tight

            text-corporate

            mb-1
          "
        >
          Adjunta una o varias facturas
        </div>

        <div
          className="
            text-[13px]
            leading-relaxed

            text-slate-500
          "
        >
          PDF, JPG o PNG · Máx. 10MB por archivo
        </div>

        {fileName && (

          <div
            className="
              mt-3

              text-[13px]

              text-corporate

              font-medium
            "
          >
            ✓ {fileName}
          </div>

        )}

        <input
          name="factura"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => {

            const files = Array.from(e.target.files)

            if (files.length === 1) {

              setFileName(files[0].name)

            } else if (files.length > 1) {

              setFileName(
                `${files.length} archivos seleccionados`
              )

            }

          }}
        />

      </div>

    </label>

  )

}