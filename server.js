const express = require('express');
const file = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static('public'));

app.listen(3000);

app.get('/file', (req, res) => {
    file.readFile('./public/txt/' + req.query.filename, 'utf8', 
        function(err, data) {
            if (err) console.log(err);
            res.send(data);
        }
    );
});

app.get('/vertex-shader', (req, res) => {
    file.readFile('./shaders/vertex.glsl', 'utf8', 
        function(err, data) {
            if (err) console.log(err);
            res.send(data);
        }
    );
});

