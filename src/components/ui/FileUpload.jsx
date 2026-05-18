import { Upload } from 'lucide-react'

export default function FileUpload({
  fileName,
  setFileName
}) {

  return (

    <label className="block cursor-pointer">

      <div
        className="
          bg-surface-secondary
          border
          border-border-soft

          hover:border-corporateGreen

          transition-colors

          rounded-[24px]

          p-6

          text-center
        "
      >

        <Upload
          className="
            w-8
            h-8
            mx-auto
            mb-4
            text-corporateGreen
          "
        />

        <div className="ui-title mb-2">
          Adjunta una o varias facturas
        </div>

        <div className="card-text">
          PDF, JPG o PNG · Máx. 10MB por archivo
        </div>

        {fileName && (

          <div
            className="
              mt-5

              text-sm

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