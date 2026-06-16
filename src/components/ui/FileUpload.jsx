import {
  BadgeCheck,
  CheckCircle,
  ClipboardCheck,
  Flame,
  FileImage,
  FileText,
  ShieldCheck,
  UploadCloud
} from 'lucide-react'

const analysisBadges = [
  ['PDF, JPG y PNG', FileImage],
  ['Analisis preliminar', ClipboardCheck],
  ['Sin compromiso', ShieldCheck],
  ['Respuesta personalizada', BadgeCheck]
]

export default function FileUpload({
  fileName,
  setFileName,
  compact = false,
  className = ''
}) {

  return (

    <label className={`group block cursor-pointer ${className}`}>

      <div
        className={`
          relative
          flex
          flex-col
          items-center
          justify-center
          overflow-hidden
          border
          border-dashed
          text-center
          transition-all
          duration-300
          hover:border-corporateGreen

          ${compact
            ? 'gap-4 rounded-[20px] border-corporateGreen/35 bg-white/75 px-4 py-4 sm:flex-row sm:justify-start sm:text-left'
            : 'min-h-[300px] gap-6 rounded-[26px] border-corporateGreen/45 bg-[radial-gradient(circle_at_50%_20%,rgba(67,184,134,0.11),transparent_34%),linear-gradient(135deg,#FFFFFF_0%,#F7FBF8_58%,#EEF8F3_100%)] px-6 py-10 hover:-translate-y-[1px] hover:shadow-[0_24px_70px_rgba(16,37,66,0.12)] sm:px-8 lg:px-10'
          }
        `}
      >

        {!compact && (
          <>
            <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(45,126,81,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(45,126,81,0.055)_1px,transparent_1px)] [background-size:34px_34px]" />

            <div className="pointer-events-none absolute left-6 top-6 hidden flex-col gap-3 text-corporateGreen/80 sm:flex">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-corporateGreen/15 bg-white/80 shadow-[0_12px_28px_rgba(16,37,66,0.06)]">
                <FileText className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-corporateGreen/15 bg-white/80 shadow-[0_12px_28px_rgba(16,37,66,0.06)]">
                <FileImage className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-corporateGreen/15 bg-white/80 shadow-[0_12px_28px_rgba(16,37,66,0.06)]">
                <ClipboardCheck className="h-5 w-5" strokeWidth={1.8} />
              </span>
            </div>

            <div className="pointer-events-none absolute bottom-6 right-6 hidden h-[150px] w-[220px] lg:block">
              <div className="absolute bottom-2 left-8 h-[118px] w-[88px] -rotate-6 rounded-[16px] border border-[#DDE8F2] bg-white/85 shadow-[0_18px_40px_rgba(16,37,66,0.10)]">
                <FileText className="absolute left-6 top-5 h-8 w-8 text-corporateGreen" strokeWidth={1.8} />
                <span className="absolute bottom-12 left-5 h-2 w-12 rounded-full bg-[#B8CCE0]" />
                <span className="absolute bottom-8 left-5 h-2 w-10 rounded-full bg-[#D1DDE8]" />
                <span className="absolute bottom-4 left-5 h-2 w-8 rounded-full bg-[#E1E8EF]" />
              </div>

              <div className="absolute bottom-0 right-14 h-[132px] w-[98px] rotate-7 rounded-[18px] border border-[#DDE8F2] bg-[#EFF7FF]/90 shadow-[0_18px_40px_rgba(16,37,66,0.10)]">
                <Flame className="absolute left-7 top-6 h-8 w-8 text-[#0B69D1]" fill="currentColor" />
                <span className="absolute bottom-14 left-6 h-2 w-12 rounded-full bg-[#B8CCE0]" />
                <span className="absolute bottom-10 left-6 h-2 w-10 rounded-full bg-[#D1DDE8]" />
                <span className="absolute bottom-6 left-6 h-2 w-8 rounded-full bg-[#E1E8EF]" />
              </div>

              <div className="absolute bottom-8 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-corporateGreen text-white shadow-[0_16px_32px_rgba(45,126,81,0.26)]">
                <CheckCircle className="h-7 w-7" fill="currentColor" />
              </div>
            </div>
          </>
        )}

        <div
          className={`
            relative
            z-10
            flex
            shrink-0
            items-center
            justify-center
            rounded-full
            transition-transform
            duration-300

            ${compact
              ? 'h-10 w-10 bg-transparent text-corporateGreen'
              : 'h-20 w-20 bg-corporateGreen text-white shadow-[0_18px_38px_rgba(45,126,81,0.28)] group-hover:scale-105'
            }
          `}
        >
          {compact ? (
            <UploadCloud className="h-5 w-5" strokeWidth={1.9} />
          ) : (
            <UploadCloud className="h-10 w-10 text-white" strokeWidth={1.8} />
          )}
        </div>

        <div className={`relative z-10 min-w-0 ${compact ? '' : 'max-w-[520px]'}`}>

          <div
            className={`
              mb-1
              font-semibold
              leading-tight
              text-corporate
              ${compact ? 'text-[14px]' : 'text-[26px] sm:text-[30px]'}
            `}
          >
            {compact ? 'Adjunta una o varias facturas' : 'Arrastra aqui tu factura'}
          </div>

          <div
            className={`
              leading-relaxed
              text-slate-500
              ${compact ? 'text-[12px]' : 'text-[15px]'}
            `}
          >
            {compact ? (
              'PDF, JPG o PNG · Max. 10MB por archivo'
            ) : (
              <>
                o haz clic para seleccionarla
                <span className="mt-2 block text-[13px] text-slate-500">
                  PDF, JPG o PNG &middot; Max. 10MB por archivo
                </span>
              </>
            )}
          </div>

          {fileName && (

            <div
              className={`
                mt-3
                font-medium
                text-corporate
                ${compact ? 'text-[13px]' : 'text-sm'}
              `}
            >
              {fileName}
            </div>

          )}

        </div>

        {!compact && (
          <div className="relative z-10 mt-2 flex max-w-[650px] flex-wrap justify-center gap-2">
            {analysisBadges.map(([label, Icon]) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-corporateGreen/14 bg-white/80 px-3 py-2 text-[12px] font-semibold text-corporate shadow-[0_10px_24px_rgba(16,37,66,0.05)]"
              >
                <Icon className="h-4 w-4 text-corporateGreen" strokeWidth={1.9} />
                {label}
              </span>
            ))}
          </div>
        )}

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
