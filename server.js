const express = require('express');
const file = require('fs');

const app = express();

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