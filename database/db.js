const mysql = require("mysql");

//* para levantar el repositorio: "node app.js"
//* en el puerto 5000
const conexion = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "",
  password: "",
  database: "tasks_nodejs_db",
});

conexion.connect((error) => {
  if (error) {
    console.error("el error de connexión es: ", error);
    return;
  }
  console.log("¡Conectado a la BD MySQL!");
});

module.exports = conexion;
