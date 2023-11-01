const WebSocket = require('ws');

const wss = new WebSocket.Server({port: 9000});
const clients = new Map();

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
    const pack = {
      "user": 125,
      "video": 1,
      "src" : "/var/www/vdnh.space/public/data/fake/photos/30.jpg",
      "img": "data:image/jpeg;base64/ouhu/jh"
    } 
    ws.send(JSON.stringify(pack));
  });

});


