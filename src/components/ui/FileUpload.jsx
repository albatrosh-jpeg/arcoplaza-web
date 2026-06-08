import {
  CheckCircle,
  Flame,
  FileText,
  UploadCloud
} from 'lucide-react'

export default function FileUpload({
  fileName,
  setFileName,
  compact = false,
  className = ''
}) {

  return (

    <label className={`block cursor-pointer ${className}`}>

      <div
        className={`
          relative
          flex
          flex-col
          items-center
          justify-center
          gap-4
          sm:flex-row
          sm:justify-start

          rounded-[20px]
          overflow-hidden

          border
          border-dashed
          border-corporateGreen/35

          ${compact ? 'bg-white/75' : 'bg-[linear-gradient(135deg,#FFFFFF_0%,#F6FBF7_100%)]'}

          ${compact ? 'px-4 py-4' : 'px-6 py-7 lg:pr-72'}

          text-center
          sm:text-left

          transition-colors
          hover:border-corporateGreen
        `}
      >

        {!compact && (
          <div className="pointer-events-none absolute bottom-0 right-8 hidden h-[110px] w-[250px] lg:block">
            <div className="absolute bottom-0 left-10 h-[88px] w-[70px] -rotate-6 rounded-[12px] border border-[#DDE8F2] bg-[#EEF5FC] shadow-[0_14px_30px_rgba(16,37,66,0.08)]">
              <FileText className="absolute left-5 top-4 h-7 w-7 text-[#2A7ED1]" strokeWidth={1.8} />
              <span className="absolute bottom-8 left-5 h-2 w-9 rounded-full bg-[#B8CCE0]" />
              <span className="absolute bottom-5 left-5 h-2 w-7 rounded-full bg-[#D1DDE8]" />
            </div>

            <div className="absolute bottom-0 right-20 h-[100px] w-[78px] rotate-8 rounded-[14px] border border-[#DDE8F2] bg-[#E8F2FF] shadow-[0_14px_30px_rgba(16,37,66,0.08)]">
              <Flame className="absolute left-5 top-5 h-7 w-7 text-[#0B69D1]" fill="currentColor" />
              <span className="absolute bottom-9 left-5 h-2 w-10 rounded-full bg-[#B8CCE0]" />
              <span className="absolute bottom-6 left-5 h-2 w-8 rounded-full bg-[#D1DDE8]" />
            </div>

            <div className="absolute bottom-6 right-8 flex h-9 w-9 items-center justify-center rounded-full bg-[#8DCC5F] text-white shadow-[0_10px_24px_rgba(54,126,69,0.24)]">
              <CheckCircle className="h-6 w-6" fill="currentColor" />
            </div>
          </div>
        )}

        <div
          className={`
            relative
            z-10
            flex
            ${compact ? 'h-10 w-10' : 'h-16 w-16'}
            shrink-0
            items-center
            justify-center
            rounded-full
            ${compact ? 'bg-transparent' : 'bg-corporateGreen-soft'}
            text-corporateGreen
          `}
        >
          {compact ? (
            <UploadCloud className="h-5 w-5" strokeWidth={1.9} />
          ) : (
            <UploadCloud className="h-9 w-9" strokeWidth={1.8} />
          )}
        </div>

        <div className="relative z-10 min-w-0">

          <div
            className={`
              mb-1
              ${compact ? 'text-[14px]' : 'text-[17px]'}
              font-semibold
              text-corporate
            `}
          >
            Adjunta una o varias facturas
          </div>

          <div
            className={`
              ${compact ? 'text-[12px]' : 'text-[13px]'}
              leading-relaxed
              text-slate-500
            `}
          >
            PDF, JPG o PNG · Máx. 10MB por archivo
          </div>

          {fileName && (

            <div
              className="
                mt-3
                text-[13px]
                font-medium
                text-corporate
              "
            >
              ✓ {fileName}
            </div>

          )}

        </div>

        <input
          name="factura"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png"
          className="hidden"
          onChange={(e) => {

            const files = Array.from(e.target.files || [])

            if (!files.length) {

              setFileName('')
              return

            }

            setFileName(
              files.length === 1
                ? files[0].name
                : `${files.length} archivos seleccionados`
            )

          }}
        />

      </div>

    </label>

  )

}
