const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users API',
        description: 'An API for Users API'
    },
    host: 'localhost:3001',
    Schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

// this will generate swagger.json
swaggerAutogen(outputFile, endpointsFile, doc);