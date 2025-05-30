const express =  require('express');
const app = express();
const mime = require('mime-types');
const path = require('path');
const fs = require('fs'); // Añade esto con los otros 'require'
app.set('views', path.join(__dirname, 'views'));





console.log('__dirname:', __dirname);
console.log('Contenido de views/:', fs.readdirSync(path.join(__dirname, 'views')));


app.set("view engine", 'ejs');

//app.use(express.static('public'));
app.use('/Public', express.static('Public'));

app.use('/',require('./router'));

app.listen(1010, ()=> {console.log("Servidor funcionando en http://localhost:1010");
})

app.use('/css', express.static('public/css', {
    setHeaders: function (res, path) {
        res.setHeader('Content-Type', 'text/css');
    }
}));


app.use('/image', express.static('public/image', {
    setHeaders: function (res, path) {
        const type = mime.lookup(path);
        if (type) {
            res.setHeader('Content-Type', type);
        }
    }
}));