const express =  require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const port = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin','*');
        next();
})
app.use('/', require('./routes'));

process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });

mongodb.initDb((err) => {
    if (err) {
        console.log(err)
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and nodeRunning on port ${port}`)});
    }
})

