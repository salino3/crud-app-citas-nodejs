const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

// Ruta para obtener lista citas
router.get("/", (req, res) => {
  conexion.query("SELECT * FROM tasks_nodejs_db.task;", (error, results) => {
    if (error) {
      throw error;
    } else {
    res.render("index", {results: results});
    }
  });
});

// Ruta para crear cita
router.get('/create', (req, res) => {
    res.render('create');
});



// Ruta para editar cita
router.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  conexion.query(
    "SELECT * FROM tasks_nodejs_db.task WHERE id = ?",
    [ id],
    (error, results) => {
      if (error) { 
        throw error;
      } else {
        res.render("edit", { task: results[0] });
      }
    }
  );
}); 

// Ruta para eliminar cita
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
  conexion.query("DELETE FROM tasks_nodejs_db.task WHERE id = ?", 
  [ id],  (error, results) => {
      if (error) {
        throw error;
      } else {
        res.redirect("/");
      }
    }); 
});


const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;


