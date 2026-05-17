import { Upload } from 'lucide-react'

export default function FileUpload({
  fileName,
  setFileName
}) {

  return (

    <label className="block cursor-pointer">

      <div className="
        bg-[#f8f8f6]
        border
        border-[#e7e4dd]
        hover:border-corporateGreen
        hover:bg-[#fcfbf8]
        transition-colors
        rounded-2xl
        p-6
        text-center
      ">

        <Upload className="w-8 h-8 mx-auto mb-3 text-corporateGreen" />

        <div className="font-semibold text-corporate mb-1">
          Arrastra tu factura o haz clic aquí
        </div>

        <div className="text-sm text-slate-500">
          PDF, JPG o PNG · Máx. 10MB
        </div>

        {fileName && (

          <div className="mt-3 text-sm text-corporate font-semibold">
            ✓ {fileName}
          </div>

        )}

        <input
          name="factura"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => {

            if (e.target.files[0]) {
              setFileName(e.target.files[0].name)
            }

          }}
        />

      </div>

    </label>

  )

}