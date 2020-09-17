'use strict';

const http = require('http');

const hostname = "127.0.0.1";
const port = 3333;

const express = require('express'); 
const es6Renderer = require('express-es6-template-engine');
const app = express(); // This initializes express. The parentheses make the function run
app.engine("html", es6Renderer); // This tells Express to run the engine
app.set("views", "./views"); // Tells Express which folder views are in
app.set("view engine", "html"); // To use html 

app.use(express.static("public")); //
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // The above 2 lines allow you to take form data and send it to a server as a JSON object 

const server = http.createServer(app); 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

const rootController  = require ("./routes/index");

app.use('/', rootController); // <- ROOT route
