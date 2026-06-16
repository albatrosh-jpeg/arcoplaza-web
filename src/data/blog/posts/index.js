import { post as contratosEnergeticos } from './contratos-energeticos'
import { post as facturaComunidadTodoElMundo } from './factura-comunidad-todo-el-mundo'
import { post as falsaSeguridadMismaCompania } from './falsa-seguridad-misma-compania'
import { post as bateriasEmpresasAutoconsumo } from './baterias-empresas-autoconsumo'
import { post as cambiaPrecioElectricidadEspana } from './cambia-precio-electricidad-espana'
import { post as laElectricidadCambiaCadaHora } from './la-electricidad-cambia-cada-hora'
import { post as comoInterpretarCambiosNormativos } from './como-interpretar-cambios-normativos'
import { post as cuatroGrandesCompaniasMercadoElectrico } from './cuatro-grandes-companias-mercado-electrico'
import { post as empresasPaganRealidadQueYaNoExiste } from './empresas-pagan-realidad-que-ya-no-existe'
import { post as comercializadoraPequenaVenderMasBarato } from './comercializadora-pequena-vender-mas-barato'
import { post as loQueNadieMiraEnUnaFactura } from './lo-que-nadie-mira-en-una-factura'
import { post as ventiladorTodaLaNoche } from './ventilador-toda-la-noche'
import { post as aireAcondicionadoTodaLaNoche } from './aire-acondicionado-toda-la-noche'
import { post as precioFijoVsIndexado } from './precio-fijo-vs-indexado'
import { post as potenciaContratada } from './potencia-contratada'
import { post as comunidadesLuz } from './comunidades-luz'
import { post as omipYOmie } from './omip-y-omie'

export const posts = {
  [contratosEnergeticos.slug]: contratosEnergeticos,
  [facturaComunidadTodoElMundo.slug]: facturaComunidadTodoElMundo,
  [falsaSeguridadMismaCompania.slug]: falsaSeguridadMismaCompania,
  [bateriasEmpresasAutoconsumo.slug]: bateriasEmpresasAutoconsumo,
  [cambiaPrecioElectricidadEspana.slug]: cambiaPrecioElectricidadEspana,
  [laElectricidadCambiaCadaHora.slug]: laElectricidadCambiaCadaHora,
  [comoInterpretarCambiosNormativos.slug]: comoInterpretarCambiosNormativos,
  [cuatroGrandesCompaniasMercadoElectrico.slug]: cuatroGrandesCompaniasMercadoElectrico,
  [empresasPaganRealidadQueYaNoExiste.slug]: empresasPaganRealidadQueYaNoExiste,
  [comercializadoraPequenaVenderMasBarato.slug]: comercializadoraPequenaVenderMasBarato,
  [loQueNadieMiraEnUnaFactura.slug]: loQueNadieMiraEnUnaFactura,
  [ventiladorTodaLaNoche.slug]: ventiladorTodaLaNoche,
  [aireAcondicionadoTodaLaNoche.slug]: aireAcondicionadoTodaLaNoche,
  [precioFijoVsIndexado.slug]: precioFijoVsIndexado,
  [potenciaContratada.slug]: potenciaContratada,
  [comunidadesLuz.slug]: comunidadesLuz,
  [omipYOmie.slug]: omipYOmie
}
