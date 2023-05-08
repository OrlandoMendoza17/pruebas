require('dotenv').config()
const Connection = require("tedious").Connection;

const DB_HOST = process.env.DB_HOST

console.log(DB_HOST);

console.log("Ejecutando");

const config = {
  server: DB_HOST,
  authentication: {
    type: "default",
    options: {
      userName: "OrlandoM",
      password: "Denario123*",
    }
  },
  options: {
    database: "TESTVNZ",
    instanceName: "Heinz",
    trustServerCertificate: true, // change to true for local dev / self-signed certs,
    encrypt: false,
  }
}

const connection = new Connection(config)

const executeStatement = () => {
  console.log("Conectado a la base de datos");
}

connection.connect()

connection.on("connect", (error) => {
  if (error) {
    console.log("Error al conectarse a la base de datos")
    throw error;
  }
  console.log("Conectado a la base de datos");
})