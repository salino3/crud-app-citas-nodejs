const conexion = require('../database/db');

exports.save = (req, res) => {
   const descripcion = req.body.descripcion;
   const fecha = req.body.fecha;
   const hora = req.body.hora;
   const ejecucion = req.body.ejecucion;
    
   console.log(descripcion, fecha, hora, ejecucion);
   conexion.query(
     "INSERT INTO task SET ?",
     {
       descripcion: descripcion,
       fecha: fecha,
       hora: hora,
       ejecucion: ejecucion,
     },
     (error, result) => {
       if (error) {
         console.log(error);
       } else {
         res.redirect("/");
       }
     }
   );
};

exports.update = (req, res) => {
     const id = req.body.id;
   const descripcion = req.body.descripcion;
   const fecha = req.body.fecha;
   const hora = req.body.hora;
   const ejecucion = req.body.ejecucion;
    conexion.query(
      `UPDATE tasks_nodejs_db.task SET ? WHERE id = ?`,
      [
        {
          descripcion: descripcion,
          fecha: fecha,
          hora: hora,
          ejecucion: ejecucion,
        },
        id,
      ],
      (error, results) => {
        if (error) {
          console.log(error);
        } else {
          res.redirect("/");
        }
      }
    );
}




