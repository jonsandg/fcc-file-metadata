var express = require('express');
var app = express();

const busboyBodyParser = require('busboy-body-parser');
app.use(busboyBodyParser());

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/view_size', function(req, res){
    res.json({
        size : req.files.uploadedFile.size
    });
});

app.listen(app.get('port'), function(){
    console.log('Server running on ' + app.get('port'));

});