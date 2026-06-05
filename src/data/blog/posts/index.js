import { post as contratosEnergeticos } from './contratos-energeticos'
import { post as ventiladorTodaLaNoche } from './ventilador-toda-la-noche'
import { post as precioFijoVsIndexado } from './precio-fijo-vs-indexado'
import { post as potenciaContratada } from './potencia-contratada'
import { post as comunidadesLuz } from './comunidades-luz'
import { post as omipYOmie } from './omip-y-omie'

export const posts = {
  [contratosEnergeticos.slug]: contratosEnergeticos,
  [ventiladorTodaLaNoche.slug]: ventiladorTodaLaNoche,
  [precioFijoVsIndexado.slug]: precioFijoVsIndexado,
  [potenciaContratada.slug]: potenciaContratada,
  [comunidadesLuz.slug]: comunidadesLuz,
  [omipYOmie.slug]: omipYOmie
}