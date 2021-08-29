let express = require('express');
let app = express();
let swig = require('swig');
app.set('views','./views');
app.engine('html',swig.renderFile);
app.set('view engine','html');
app.use(express.static(__dirname + '/public'));
app.listen(2000);

app.get('/',(req, res) => {
    res.render('index.html');
});

app.get('/login',(req, res) => {
    res.render('Page_Login.html');
});

app.get('/register-page',(req, res) => {
    res.render('Register_Page.html');
});

app.get('/get-role-page',(req,res) => {
    res.render('Role_Page.html');
});

app.get('/get-all-page',(req, res) => {
    res.render('Account_Page.html');
});


