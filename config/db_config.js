var mongoose = require('mongoose');
var urlString = 'mongodb://localhost/NewApi';
mongoose.connect(urlString, function(erro, resp){
    if(erro){
        console.log('Não foi possível conectar a:'+ urlString);
    }else{
        console.log('Conectado a'+ urlString);
    }
});

