var connection = require('./connection.js');

var orm = {
    all: function(tableInput, cb) {
        connection.query('SELECT * FROM '+ tableInput +';', 
          function(err, result) {
            if (err) throw err; 
            cb(result);
        });
    },

    //an example of objColVals would be {item: pickles, purchased: true}
    //update: function(table, objColVals, condition, cb) {

    // update: function(tableInput, condition, cb){
    //   // connection.query('UPDATE' +tableInput+' SET purchased=' + condition + 'WHERE id = '+ id +';',
    //   // var querystring = "UPDATE " + tableInput + " SET purchased="+ condition + "WHERE id = " + id +';',
    //   // console.log(querystring);
    //   connection.query('UPDATE '+tableInput+' SET purchased=' + condition + ' WHERE id = '+ id +';',

    //   // connection.query(querystring,
    //    function (err, result){
    //       if (err) throw err;
    //       cb(result);
    //     });
    // },

    update: function(tableInput, condition, cb){
      connection.query('UPDATE '+tableInput+' SET purchased=true WHERE id = '+condition+';',
       function (err, result){
          if (err) throw err;
          cb(result);
        });
    },
  //create: function(table, cols, vals, cb) {
    create: function(tableInput, val, cb) {
      connection.query('INSERT INTO '+ tableInput +"(item) VALUES ('"+val+"');", 
        function(err,result){
        if(err) throw err;
        cb(result);
      });
    },
    // will remove all records from table, reset auto-increment, cannot be rolled back 
      truncate: function (tableInput, cb) {
        connection.query('TRUNCATE'+ tableInput +';',
        function (err, result){
            if (err) throw err;
            cb(result);
        });
    },
    // TRUNCATE [TABLE] tbl_name  https://dev.mysql.com/doc/refman/5.7/en/truncate-table.html

    
    // will be used to delete specific records
  //   delete: function (tableInput, condition, cb) {
  //       connection.query('DELETE FROM'+ tableInput +' WHERE id ='+condition+';',
  //       function (err, result){
  //           if (err) throw err;
  //           cb(result);
  //       });
  //   }
  // };

    delete: function (tableInput, condition, cb) {
            var querystring = "DELETE FROM " + tableInput + " WHERE id='" + condition + "';";
            console.log(querystring);
            connection.query(querystring ,
            function (err, result){
                if (err) throw err;
                cb(result);
            });
        }
}
module.exports = orm;


//objColVals would be the columns and values that you want to update
    //an example of objColVals would be {name: panther, sleepy: true}
    // update: function(table, objColVals, condition, cb) {
    //   var queryString = 'UPDATE ' + table;

    //   queryString = queryString + ' SET ';
    //   queryString = queryString + objToSql(objColVals);
    //   queryString = queryString + ' WHERE ';
    //   queryString = queryString + condition;

    //   console.log(queryString)
    //   connection.query(queryString, function(err, result) {
    //     if (err) throw err;
    //     cb(result);
    //   });
    // }