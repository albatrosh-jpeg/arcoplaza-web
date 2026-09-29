import { useRef, useState } from 'react'
import {
  AlertCircle,
  CheckCircle,
  FileText,
  RefreshCw,
  ShieldCheck,
  UploadCloud
} from 'lucide-react'

import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import Seo from '../components/seo/Seo'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

function formatObjectValues(value, unit = '') {
  if (!value || typeof value !== 'object') return 'No detectado'

  const entries = Object.entries(value)
    .filter(([, item]) => item !== null && item !== undefined && item !== '')

  if (!entries.length) return 'No detectado'

  return entries
    .map(([key, item]) => `${key}: ${item}${unit}`)
    .join(' - ')
}

function DataRow({
  label,
  value
}) {
  return (
    <div className="border-b border-border-soft py-4 last:border-b-0">
      <dt className="text-[13px] font-semibold uppercase tracking-[0.16em] text-text-muted">
        {label}
      </dt>
      <dd className="mt-1 text-[16px] font-medium text-corporate">
        {value || 'No detectado'}
      </dd>
    </div>
  )
}

function ConfidenceBadge({
  confidence
}) {
  const tone = {
    Alta: 'border-corporateGreen/25 bg-corporateGreen-soft text-corporateGreen',
    Media: 'border-[#D9C489]/45 bg-[#FFF8E6] text-[#7A5B13]',
    Baja: 'border-[#E8B7B7]/60 bg-[#FFF0F0] text-[#8A2F2F]'
  }

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${tone[confidence?.level] || tone.Baja}`}>
      <ShieldCheck size={16} />
      Cobertura de datos: {confidence?.level || 'Baja'}
    </div>
  )
}

function InvoiceDiagnosis({
  diagnosis,
  onReset
}) {
  const fields = diagnosis.detectedFields

  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-7 flex flex-col gap-4 border-b border-border-soft pb-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-corporateGreen">
            <CheckCircle size={18} />
            Factura leida
          </div>

          <h2 className="heading-h3 text-corporate">
            {diagnosis.title}
          </h2>

          <p className="mt-3 max-w-2xl leading-relaxed text-text-secondary">
            {diagnosis.disclaimer} Una revision manual permitiria confirmar los puntos revisables y completar los datos que falten.
          </p>
        </div>

        <ConfidenceBadge confidence={diagnosis.confidence} />
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <dl className="rounded-[20px] border border-border-soft bg-surface-secondary px-5">
          <DataRow label="Comercializadora" value={fields.company} />
          <DataRow label="Tarifa" value={fields.tariff} />
          <DataRow label="CUPS" value={fields.cups} />
          <DataRow label="Potencia contratada" value={formatObjectValues(fields.periodPowers, ' kW')} />
          <DataRow label="Consumo" value={formatObjectValues(fields.periodConsumption, ' kWh')} />
          <DataRow label="Importe total" value={fields.total ? `${fields.total} EUR` : null} />
          <DataRow label="Periodo" value={fields.billingPeriodLabel} />
        </dl>

        <div>
          <div className="rounded-[20px] border border-[#DDE7DD] bg-[#F7FAF7] p-5">
            <h3 className="text-lg font-semibold text-corporate">
              Posibles puntos revisables
            </h3>

            <div className="mt-5 space-y-4">
              {diagnosis.observations.map((observation) => (
                <div key={observation} className="flex gap-3 text-[15px] leading-relaxed text-text-secondary">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-corporateGreen" />
                  <span>{observation}</span>
                </div>
              ))}
            </div>
          </div>

          {diagnosis.missingFields?.length > 0 && (
            <div className="mt-5 rounded-[20px] border border-border-soft bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-text-muted">
                Datos no confirmados
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {diagnosis.missingFields.slice(0, 7).map((field) => (
                  <span
                    key={field}
                    className="rounded-full border border-border-soft bg-surface-secondary px-3 py-1.5 text-xs font-medium text-text-secondary"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          )}

          <Button
            type="button"
            variant="secondary"
            onClick={onReset}
            className="mt-6 gap-2"
          >
            <RefreshCw size={17} />
            Probar otra factura
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default function AnalyzeInvoice() {
  const inputRef = useRef(null)
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [diagnosis, setDiagnosis] = useState(null)

  function reset() {
    setFile(null)
    setError('')
    setDiagnosis(null)

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  function handleFileChange(event) {
    const selectedFile = event.target.files?.[0]

    setError('')
    setDiagnosis(null)

    if (!selectedFile) {
      setFile(null)
      return
    }

    if (selectedFile.type !== 'application/pdf' && !selectedFile.name.toLowerCase().endsWith('.pdf')) {
      setFile(null)
      setError('Selecciona una factura en formato PDF.')
      event.target.value = ''
      return
    }

    setFile(selectedFile)
  }

  async function handleSubmit(event) {
    event.preventDefault()

    if (!file) {
      setError('Selecciona una factura PDF antes de analizarla.')
      return
    }

    const formData = new FormData()
    formData.append('invoice', file)

    setLoading(true)
    setError('')
    setDiagnosis(null)

    try {
      const response = await fetch('/api/analyze-invoice', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data?.error || 'No hemos podido analizar la factura.')
        return
      }

      setDiagnosis(data.diagnosis)
    }
    catch {
      setError('No hemos podido conectar con el analizador. Intentalo de nuevo.')
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-surface-secondary text-corporate font-sans pt-[74px]">
      <Seo
        title="Analizador de factura electrica | Arcoplaza Asesores"
        description="Sube una factura electrica en PDF y obtiene un diagnostico preliminar prudente con los datos detectados automaticamente."
        path="/analizar-factura"
        robots="noindex, nofollow"
      />

      <Navbar />

      <main>
        <section className="border-b border-border-soft bg-[#F8F6F1]">
          <div className="container-content grid gap-10 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
            <div>
              <div className="eyebrow mb-5 inline-flex rounded-full border border-border-soft bg-white px-4 py-2 text-corporateGreen shadow-sm">
                ANALIZADOR PRELIMINAR
              </div>

              <h1 className="heading-h1 max-w-3xl text-corporate">
                Analiza una factura eléctrica en PDF
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-text-secondary">
                Extraemos los datos principales de la factura y mostramos una lectura prudente de posibles puntos revisables. No sustituye una revision tecnica manual.
              </p>

              <div className="mt-8 grid gap-3 text-sm text-text-secondary sm:grid-cols-3">
                <div className="rounded-[18px] border border-border-soft bg-white p-4">
                  Procesamos la factura unicamente para generar este diagnostico preliminar.
                </div>
                <div className="rounded-[18px] border border-border-soft bg-white p-4">
                  En esta version no almacenamos el PDF.
                </div>
                <div className="rounded-[18px] border border-border-soft bg-white p-4">
                  Evita subir documentos que no quieras que sean analizados.
                </div>
              </div>
            </div>

            <Card className="p-6 sm:p-8">
              <form onSubmit={handleSubmit}>
                <label className="group block cursor-pointer">
                  <div className="relative flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[26px] border border-dashed border-corporateGreen/45 bg-[radial-gradient(circle_at_50%_20%,rgba(67,184,134,0.11),transparent_34%),linear-gradient(135deg,#FFFFFF_0%,#F7FBF8_58%,#EEF8F3_100%)] px-6 py-10 text-center transition-all duration-300 hover:-translate-y-[1px] hover:border-corporateGreen hover:shadow-[0_24px_70px_rgba(16,37,66,0.12)]">
                    <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(45,126,81,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(45,126,81,0.055)_1px,transparent_1px)] [background-size:34px_34px]" />

                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-corporateGreen text-white shadow-[0_18px_38px_rgba(45,126,81,0.28)] transition-transform duration-300 group-hover:scale-105">
                      <UploadCloud className="h-10 w-10" strokeWidth={1.8} />
                    </div>

                    <div className="relative z-10 mt-6 max-w-[520px]">
                      <div className="text-[26px] font-semibold leading-tight text-corporate sm:text-[30px]">
                        Selecciona tu factura PDF
                      </div>

                      <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                        Max. 8MB. La lectura funciona mejor con PDFs digitales, no escaneados.
                      </p>

                      {file && (
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-corporateGreen/20 bg-white/80 px-4 py-2 text-sm font-semibold text-corporate">
                          <FileText size={16} className="text-corporateGreen" />
                          {file.name}
                        </div>
                      )}
                    </div>

                    <input
                      ref={inputRef}
                      name="invoice"
                      type="file"
                      accept="application/pdf,.pdf"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </div>
                </label>

                <Button
                  type="submit"
                  disabled={loading || !file}
                  className="mt-6 w-full gap-3 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? 'Analizando factura...' : 'Analizar factura'}
                  {!loading && <FileText size={18} />}
                </Button>

                {loading && (
                  <div className="mt-5 flex items-center gap-3 rounded-[18px] border border-border-soft bg-surface-secondary p-4 text-sm text-text-secondary">
                    <RefreshCw className="h-5 w-5 animate-spin text-corporateGreen" />
                    Analizando factura... Esto puede tardar unos segundos.
                  </div>
                )}

                {error && (
                  <div className="mt-5 flex items-start gap-3 rounded-[18px] border border-[#E8B7B7]/60 bg-[#FFF0F0] p-4 text-sm leading-relaxed text-[#8A2F2F]">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    {error}
                  </div>
                )}
              </form>
            </Card>
          </div>
        </section>

        {diagnosis && (
          <section className="py-12 lg:py-16">
            <div className="container-content">
              <InvoiceDiagnosis
                diagnosis={diagnosis}
                onReset={reset}
              />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
