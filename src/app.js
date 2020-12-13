require('dotenv').config();

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//Importing Routes
const routes = require('./routes/routes');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('view-engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(morgan('dev'));
//Datos Conexion Base de Datos
app.use(myConnection(mysql, {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
}, 'single'));
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/', routes);

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting server
app.listen(app.get('port'), () => {
    console.log("Server listening on port 3000");
});