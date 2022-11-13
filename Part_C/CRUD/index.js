const express= require('express');
const BodyParser= require('body-parser');
const port=8080;
const sql=require('./db');
const path= require('path');
const CRUDOper= require('./CRUDOperation');

const app=express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));
app.engine('pug', require('pug').__express);
app.set('views', path.join(__dirname,'views'));
app.set('views engine', 'pug');
app.use(express.static('static'));





app.get('/',(req,res)=>{
    res.render('HomePage.pug')
});

app.get('/HomePage.pug',(req,res)=>{
    res.render('HomePage.pug')
});

app.get('/PaistriesPage.pug',(req,res)=>{
    res.render('PaistriesPage.pug')
});
app.get('/CupcakePage.pug',(req,res)=>{
    res.render('CupcakePage.pug')
});
app.get('/BirthdayCakesPage.pug',(req,res)=>{
    res.render('BirthdayCakesPage.pug')
});
app.get('/SignInPage.pug',(req,res)=>{
    res.render('SignInPage.pug')
});
app.get('/signUpPage.pug',(req,res)=>{
    res.render('signUpPage.pug')
});
app.get('/SoppingCart.pug',(req,res)=>{
    res.render('SoppingCart.pug')
});
app.get('/BakerSignIn.pug',(req,res)=>{
    res.render('BakerSignIn.pug')
});
app.get('/BakerSignIn.pug',(req,res)=>{
    res.render('BakerSignIn.pug')
});
app.get('/try.pug',(req,res)=>{
    res.render('try.pug')
});


app.get('/selectAll', (req, res)=>{
    res.render('selectAll.pug');
});



app.post('/InsertCustomer', CRUDOper.InsertCustomer);

app.get('/selectAllCust', (req, res)=>{
    res.render('selectAllCust.pug');
});
app.get('/BakerShowCustomers', (req, res)=>{
    res.render('BakerShowCustomers.pug');
});

app.get('/ShowAllCustomers',CRUDOper.ShowAllCustomers);
app.post('/getCustomerByName',CRUDOper.getCustomerByName);

app.listen(port, ()=>{
console.log("server is running on port" + port);
});


