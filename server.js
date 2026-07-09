const express = require('express');
const redis = require('redis');

const app = express();

// Docker Compose me hum IP ki jagah container ka naam (redis-db) use karte hain
const client = redis.createClient({
    url: 'redis://redis-db:6379'
});

client.on('error', (err) => console.log('Redis Client Error', err));

app.get('/', async (req, res) => {
    res.send('🚀 Success! Node.js app aur Redis Database aapas me connect ho gaye hain.');
});

app.listen(3000, () => {
    console.log('Web server is running on port 3000');
});
