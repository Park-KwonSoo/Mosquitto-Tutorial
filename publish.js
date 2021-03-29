const mqtt = require('mqtt');
const options = {
    host : '192.168.0.20',
    port : 1883
}

const client = mqtt.connect(options);

//2초마다 메시지 publish
setInterval(
    () => {
        client.publish('test2', "Hello, this is mosquitto's topic test2", () => {
            console.log("test2 published");
        });
    },
    2000
);
