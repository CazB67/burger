const sqlConnection = require("./connection");

//Selecting all the burgers
function selectAll(){
    connection.query("Select * from burgers", function(err,res){
        if (err) {
            return res.status(500).end();
          }
          return res;
    })
}


module.exports = Orm;