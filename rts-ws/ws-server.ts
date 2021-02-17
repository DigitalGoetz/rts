import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';
import { AddressInfo } from 'net';
import { v4 as uuidv4 } from 'uuid';

const app = express();


const server = http.createServer(app);
const wss = new WebSocket.Server({ server: server , path: "/userws"});

let users: string[] = [];

wss.on('connection', (ws: WebSocket) => {

    ws.on('message', (username: string) => {
        if(users.includes(username)){
            console.log(username + " already exists... adding identifier");
            const id = uuidv4().split("-")[4];
            users.push(username + "_" + id);
        }else{
            users.push(username);
        }

        wss.clients.forEach(client => {
            client.send("USERS:" + users.join(', '));
        })
    });

    ws.send("USERS:" + users.join(', '));
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    const { port } = server.address() as AddressInfo
    console.log(`Server started on port ${port} :)`);
});