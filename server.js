const express = require('express');
const server = express();
const cors = require('cors');


// Imported Routers
const userRoute = require('./router/users');
const registerRoute = require('./router/register');
const loginRoute = require('./router/login');

// Middleware
server.use(express.json());
server.use(cors());

// Routes
server.use('/api/users', userRoute);
server.use('/api/register', registerRoute);
server.use('/api/login', loginRoute);

server.listen(3300, () => {
    console.log('===API===')
})