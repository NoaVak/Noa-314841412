const sql = require('./db');

const InsertCustomer = (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const NewCustomerEntry = {
        
        "Email" : req.body.CustomerEmail,
        "FName" : req.body.CustomerFirstName,
        "LName" : req.body.CustomerLastName,
        "PhomeNumber" : req.body.CustomerPhoneNumber,
        "Password" : req.body.CustomerPassword
    }
    const QNewCust = "INSERT INTO Customers SET ?";
    sql.query(QNewCust, NewCustomerEntry, (err, mysqlres)=>{
        if (err) {
            res.status(400).send({message: "error om creating customer " + err});
            console.log("error om creating customer " + err);
            return;            
        }
        console.log("created new customer succesfully "+ mysqlres);
        res.send({message:"created new customer succesfully "+ mysqlres});
        return;
    });
};


const ShowAllCustomers = (req,res)=>{
    const Q2 = "SELECT * FROM Customers";
    sql.query(Q2, (err, mysqlres)=>{
        if (err) {
            console.log("error in getting all customers " + err);
            res.status(400).send({message:"error in getting all customers " + err})
            return;
        }
        console.log("success... ");
        res.render('CustomerResults.pug', {
            var1:"All Customers table",
            pple: mysqlres
        });
        return;
    });
};

const getCustomerByName=  (req,res)=>{
    if (!req.body) {
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }
    const Customer=req.query.FindName;
    console.log(Customer);
    const Qfind = "SELECT * FROM Customers where name like ?";
    sql.query(Qfind,Customer+"%",(err,results,fields)=>{
        if (err){
            console.log("error is: "+err);
            res.status(400).send({message: "content cannot be empty"});
            return;
        }
        console.log("Customer doesnt exist")
        res.render('CustomerResults.pug', {
            var1:"All Customers table",
            pple: mysqlres
        });
        return;
    });
};



module.exports = {InsertCustomer,ShowAllCustomers,getCustomerByName}