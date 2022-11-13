const mysql=require('mysql2');
const dbconfig=require("./db.config");

const connection= mysql.createConnection({
    host: dbconfig.HOST,
    user: dbconfig.USER,
    password: dbconfig.PASSWORD,
    database:dbconfig.DB
});

connection.connect(error=>{
    if(error) throw error;
    console.log("succesfuly connected to DB");
});

module.exports=connection;