var fs = require('fs');


exports.readFileData = (req, res) => {

    fs.readFile('./data.txt', 'utf-8', function (err, data) {
        if (err) throw err;
        let length = data.split(' ').length
        res.send({ length });
    });
}



