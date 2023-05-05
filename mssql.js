require("dotenv").config()

const sql = require('mssql')

// const sqlConfig = {
//   server: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000
//   },
//   options: {
//     encrypt: true, // for azure
//     trustServerCertificate: true // change to true for local dev / self-signed certs
//   }
// }

// console.log(sqlConfig);

const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

(async () => {
  try {
    
    // make sure that any items are correctly URL encoded in the connection string
    
    // await sql.connect(sqlConfig)
    await sql.connect(`Server=${DB_HOST},1433;Database=${DB_NAME};User Id=${DB_USER};Password=${DB_PASSWORD};Encrypt=true`)
    
    const result = await sql.query`SELECT * FROM dbo.tbl_persona WHERE persona_cedula = 27313279`
    console.log(result);
    
    console.log("Conectado a la base de datos 💚");
    
    // const result = await sql.query`select * from mytable where id = ${value}`
    // console.dir(result)
    
  } catch (error) {
    console.log("Error al conectarse a la base de datos ❌");
    console.log(error);
    // ... error checks
  }
})()