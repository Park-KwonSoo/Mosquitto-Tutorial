const mqtt = require('mqtt');
const options = {
    host : '192.168.0.20',
    port : 1883,
};

const client = mqtt.connect(options);

client.subscribe('test');

client.on('message', (topic, message) => {
    console.log('토픽 : ', topic, '메시지 : ', message.toString());
});