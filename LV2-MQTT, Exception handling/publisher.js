function dajSlucajanBroj(nMin, nMax)
{
    return Math.floor(Math.random() * (nMax - nMin + 1) + nMin);
}
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost');
client.on('connect', function() {
    console.log('Publisher is online!');
    setInterval(function() {
        var num = dajSlucajanBroj(10, 1000);
        client.publish('num', `Random generirani broj je : ${num} \n`);
        console.log('Message sent!');
    }, 5000);
});