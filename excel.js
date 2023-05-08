const xl = require("excel4node")

const workbook = new xl.Workbook()

const worksheet = workbook.addWorksheet("Hoja 1")

worksheet.cell(1, 1).string("Nombre")
worksheet.cell(1, 2).string("Apellido")
worksheet.cell(1, 3).string("Edad")
worksheet.cell(1, 4).string("Profesión")

const item = {
  Compania: "07200",
  No_batch: 3834963,
  PERIODO: 4,
  Tipo: "JE",
  FECHA: "2023-04-25",
  Documento: 5172023,
  Cuenta: "        7200.116500.1120014",
  N_Dir: 0,
  Descripcion: "NOM:DIST. NOMINA ND P-17",
  Monto: -5000,
  Ult_Act: 161942,
  Moneda: "VES",
  glexa: "NOM:DIST. NOMINA ND P-17",
  DocRef1: "00000000",
  Tipo_Batch: "G"
}

const labels = Object.keys(item)

labels.map((item, index) => {
  const ROW = 1
  const COLUMN = index + 1

  worksheet.cell(ROW, COLUMN).string(item)
})

const array = new Array(10).fill(item)

console.log(array);

array.forEach((item, index) => {
  const ROW = index + 2
  const values = Object.values(item)
  
  values.forEach((value, index) => {
    
    const valueType = typeof value;
    
    const COLUMN = index + 1
    worksheet.cell(ROW, COLUMN)[valueType](value)
  })
})

workbook.write("registros.xlsx")