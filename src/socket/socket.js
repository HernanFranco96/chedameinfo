const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const socket = (app) => {
    const httpServer = new HttpServer(app);
    const io = new IOServer(httpServer);
    
    const server = httpServer.listen(8080, err => {
        if(err) console.log(err);
        console.log(`Servidor escuchando en ${server.address().port}`);
    });

    io.on('connection', client => {
        console.log(`Usuario [${client.id}] conectado.`);

        client.on('disconnect', () => {
            console.log('Cliente desconectado.');
        });
    });
}

module.exports = {socket};