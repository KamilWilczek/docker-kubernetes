const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server', // here is the http adres or like now the name of the container from docker-compose section
    port: 6379 // defalut port for redis
});
client.set('visits', 0);

app.get('/', (req, res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('How many visits? ->> ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});