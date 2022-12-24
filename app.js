
const express = require('express');
const app = express();

//* motor de plantilla
app.set("view engine", 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express(JSON)); 

app.use('/', require('./router')); 

app.listen(5000, () => {
    console.log("server corriendo en http://localhost:5000");
});
 




