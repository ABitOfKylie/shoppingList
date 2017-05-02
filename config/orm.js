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
    //   // truncate: function (tableInput, cb) {
    //   //   connection.query('TRUNCATE TABLE'+ tableInput +';',
    //   //   function (err, result){
    //   //       if (err) throw err;
    //   //       cb(result);
    //   //   });
    // },
    delete: function (tableInput, cond, cb) {
        connection.query('DELETE FROM'+ tableInput +' WHERE id ='+cond+';',
        function (err, result){
            if (err) throw err;
            cb(result);
        });
    }
  };

module.exports = orm;