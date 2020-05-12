const connection = require("./config/connection");

main();

function main(){
    console.log("hi");
    connection.query("Select * from burgers", function(err,res){
        console.table(res);

    })
}