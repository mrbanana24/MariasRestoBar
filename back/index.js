const express = require('express');
const app = express();
const morgan=require('morgan');
const cors = require('cors');

app.use(express.json());

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

// Cors
app.use(cors());

//Rutas
app.use(require('./src/routes/index'));

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
