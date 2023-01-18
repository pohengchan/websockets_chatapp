const express = require('express');
const app = express();
    //webserver 
const http = require('http');
const server = http.createServer(app);
// const { Server } = require("socket.io");
// const io = new Server(server);

    //get request and response object
app.get('/FemcoderHome', (req, res) => {
    //node.js current file path
//     res.sendFile(__dirname + '/index.html');
    res.send('<h1>Hello all Femcoders!</h1>')
});

// io.on('connection', (socket) => {
//     console.log('a user connected');
//    socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });
//     socket.on('chat message', (data) => {
//         console.log(data.name + "'s message: " + data.message );
//         io.emit('chat message', {name:data.name, msg: data.message});
//     });
//     });

server.listen(3000, () => {
  console.log('listening on *:3000');
});