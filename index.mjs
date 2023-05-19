import { getCalendarLinks } from "./utils/ICalendar.mjs"

const info = {
  informacion_fechaPublicacion: "2023-03-25",
  informacion_fechaExpiracion: "2023-11-02",
  informacion_titulo: "John Freddy Vega"
}

const infoFormat = {
  title: info.informacion_titulo,
  start: info.informacion_fechaPublicacion,
  end: info.informacion_fechaExpiracion,
}

const links = getCalendarLinks(infoFormat)
console.log("links:", links)