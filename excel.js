const xl = require("excel4node")

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

const list = new Array(10).fill(object)

const createExcelWorkbook = (list) =>{
  const getTitles = (object) =>{
    let titles = {}
    const labelsList = Object.keys(object)
    
    // Se obtienen los nombres de cada campo se pasan a un objeto
    labelsList.forEach(item =>{
      titles = {
        ...titles,
        [item]: item,
      }  
    })
    
    return titles;
  }
  
  const titles = getTitles(list[0]) 
  
  //Se añaden los titulos de cada columna al array que se va imprimir en el excel
  list.unshift(titles)
  
  console.log("list:", list);
  
  const workbook = new xl.Workbook()
  const worksheet = workbook.addWorksheet("Hoja 1")
  
  list.forEach((item, index) => {
    const ROW = index + 1;
    const values = Object.values(item)
  
    // Se imprime cada fila de la tabla
    values.forEach((value, index) => {
      const COLUMN = index + 1
      
      // Se obtiene el tipo de valor para usar la función adecuada de la librería de excel en cada campo
      const valueType = typeof value;
  
      // Se imprime la celda
      worksheet.cell(ROW, COLUMN)[valueType](value)
      
    })
  })
  
  return workbook;
}

const workbook = createExcelWorkbook(list)
workbook.write("registros.xlsx")