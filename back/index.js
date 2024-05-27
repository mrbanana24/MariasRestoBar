const { SummaryDay } = require('./src/models/SummaryDay');

const morgan=require('morgan');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const app = express();

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

// tarea programada
cron.schedule('0 8 * * *', async () => {
    const newSummaryDay = new SummaryDay({
        fecha: new Date(),
        turnoManiana: {},
        turnoNoche: {},
        resumenDelDia: {}
    });

    try {
        await newSummaryDay.save();
        console.log('Nuevo summaryDay creado para el día:', new Date());
    } catch (error) {
        console.error('Error al crear summaryDay:', error);
    }
}, {
    scheduled: true,
    timezone: 'America/Argentina/Buenos_Aires'
});

