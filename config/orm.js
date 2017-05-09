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
    //   truncate: function (tableInput, cb) {
    //     connection.query('TRUNCATE TABLE'+ tableInput +';',
    //     function (err, result){
    //         if (err) throw err;
    //         cb(result);
    //     });
    // },
    // will be used to delete specific records
    delete: function (tableInput, condition, cb) {
        connection.query('DELETE FROM'+ tableInput +' WHERE id ='+condition+';',
        function (err, result){
            if (err) throw err;
            cb(result);
        });
    }
  };

// delete: function (tableInput, id, cb) {
//         var querystring = "DELETE FROM " + tableInput + " WHERE id='" + id + "';";
//         console.log(querystring);
//         connection.query(querystring ,
//         function (err, result){
//             if (err) throw err;
//             cb(result);
//         });
//     }
module.exports = orm;