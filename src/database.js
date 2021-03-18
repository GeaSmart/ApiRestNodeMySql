const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'EC1admin',
    database:'management'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log('ALGO SUCEDIO');
        console.log(err);
        return;
    }
    else{
        console.log('Database connection stablished!');
    }
});

module.exports = mysqlConnection;