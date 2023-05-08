require("dotenv").config()

const sql = require('mssql')

const DB_HOST = process.env.DB_HOST;
const DB_INSTANCE = process.env.DB_INSTANCE;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const sqlConfig = {
  server: DB_HOST,
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASSWORD,
  // port: 1433,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    instanceName: DB_INSTANCE,
    trustServerCertificate: true, // change to true for local dev / self-signed certs,
    encrypt: false,
  }
}

console.log(sqlConfig);
console.log("");

(async () => {
  try {
    
    // make sure that any items are correctly URL encoded in the connection string
    
    await sql.connect(sqlConfig)
    // await sql.connect(`Server=${DB_HOST},1433;Database=${DB_NAME};User Id=${DB_USER};Password=${DB_PASSWORD};Encrypt=true;`)
    
    console.log("Conectado a la base de datos ✅");
    
    const result = await sql.query`SELECT * FROM dbo.Paises`
    console.log(result);
    
  } catch (error) {
    console.log("Error al conectarse a la base de datos ❌");
    console.log(error);
    // ... error checks
  }
})()