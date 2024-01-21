const express = require('express');
const app = express();
const morgan=require('morgan');

//Configuraciones
app.set('port', process.env.PORT || 8000);
app.set('json spaces', 2)

// Conexión a base de datos
const connectDB = require('./src/config/database');
connectDB();

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas
app.use(require('./src/routes/index'));

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
