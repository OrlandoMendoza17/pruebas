import { getCalendarLinks } from "./utils/ICalendar.mjs"

const info = {
  informacion_fechaPublicacion: "2023-03-25",
  informacion_fechaExpiracion: "2023-11-02",
  informacion_titulo: "John Freddy Vega"
}

const links = getCalendarLinks(info)
console.log("links:", links)

let list = [{ TIPO: "JE" }]

list = list.reduce((accumulator, currentValue) => accumulator + `,${currentValue.TIPO}`).split(",")
list.shift()

const tipos = [...new Set(array)]