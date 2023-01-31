const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config.json')
const session = require('express-session');
const routes = require('./routes/routes.js');
const connection = require('./database/database');
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(session({
    secret: 'P{QI@JIOHRKWAHSGBJQ#)#',
    resave: false,
    saveUninitialized: true
}))

app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})


app.use('/', routes)



app.listen(config.port || 3000, function() {
    connection.connect(function(err){
        if(err){
            console.log("Wystąpił błąd w połączeniu z baza danych. " + err)
        }
        if(config.port){
            console.log("License-system został pomyślnie właczony, teraz działa na porcie " + config.port)
        } else {
            console.log("License-system został pomyślnie włączony, teraz działa na porcie 3000")
        }
    })
})
