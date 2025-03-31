import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
//MALR: imports Routes
import routerAPI from './api/v1/routes/index'

//MALR: Config para variables de entorno
import config from './config/config';
//MALR: Declaramos la variable app igualandola a express 
const app = express();
//MALR: Establece la conexion a la BD 
import { mongoose } from './config/database.config';
//MALR: Settings
app.set('port', config.PORT);
//MALR: Middlewares generales
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware para el manejo de errores
routerAPI(app);
//MALR: Routes
const api = config.API_URL;
app.get(`${api}`, (req,res)=>{
    res.send(
        `<h1>RESTful running in root</h1> <p> : <b>${api}/api-docs</b> for more information.</p>`
    );
})
app.get('/MARL', (req,res)=>{
    res.send(
        `<h1>RESTful running in MALR</h1> <p> eCommerce: <b>${api}/api-docs</b> for more information.</p>`
    );
})

// Export App
export default app;