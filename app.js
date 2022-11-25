const express = require('express');
const app = express();
const port = 3030;
const path = require('path')

app.use(express.static('public'))



app.get('/',(req,res) => res.sendFile(path.join(__dirname, 'view', 'index.html')));
app.get('/babbage',(req,res) => res.sendFile(path.join(__dirname, 'view', 'babbage.html')));
app.get('/berners-lee',(req,res) => res.sendFile(path.join(__dirname, 'view', 'berners-lee.html')));
app.get('/clarke',(req,res) => res.sendFile(path.join(__dirname, 'view','clarke.html')));
app.get('/hamilton',(req,res) => res.sendFile(path.join(__dirname,'view','hamilton.html')));

app.get('/turing',(req,res) => res.sendFile(path.join(__dirname,'view','turing.html')));
app.get('/lovelace',(req,res)=> res.sendFile(path.join(__dirname, 'view', 'lovelace.html')));
app.get('/hopper',(req,res)=> res.sendFile(path.join(__dirname, 'view', 'hopper.html')))

app.get('*',(req,res) => res.sendFile(path.join(__dirname, 'view', '404.html')))


app.listen(port, () => console.log(`Servidor levantado en el puerto ${port}`))