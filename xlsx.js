const XLSX = require("xlsx")

const object = {
  COMPANIA: "07200",
  NO_BATCH: 3834963,
  PERIODO: 4,
  TIPO: "JE",
  FECHA: "2023-04-25",
  DOCUMENTO: 5172023,
  CUENTA: "        7200.116500.1120014",
  N_DIR: 0,
  DESCRIPCION: "NOM:DIST. NOMINA ND P-17",
  MONTO: -5000,
  ULT_ACT: 161942,
  MONEDA: "VES",
  GLEXA: "NOM:DIST. NOMINA ND P-17",
  DOCREF1: "00000000",
  TIPO_BATCH: "G"
}

const list = new Array(100).fill(object)

const workbook = XLSX.utils.book_new()
const worksheet = XLSX.utils.json_to_sheet(list)

XLSX.utils.book_append_sheet(workbook, worksheet, "Hoja 1")

XLSX.writeFile(workbook, "nuevo.xlsx")