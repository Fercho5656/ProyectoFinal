import mysql2 from 'mysql2'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import routes from './routes/index.js'
import { fileURLToPath } from 'url'
const app = express();

dotenv.config()

//Settings
const viewsPath = fileURLToPath(`${import.meta.url}/../views`)
const publicPath = fileURLToPath(`${import.meta.url}/../public`)
app.set('port', process.env.PORT || 3000);
app.set('view-engine', 'ejs');
app.set('views', viewsPath)
//Middleware
app.use(morgan('dev'));
//Datos Conexion Base de Datos
const connection = mysql2.createConnection(process.env.DATABASE_URL)
const getConnection = function (req, res, next) {
    req.getConnection = function (callback) {
        return callback(null, connection)
    }
    next()
}
app.use(getConnection)
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', routes);

//Static Files
app.use(express.static(publicPath));

//Starting server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port localhost:${app.get('port')}`);
});