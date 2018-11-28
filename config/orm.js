const connection = require('./connection')

var orm={
all: function(tableInput, cb){
    connection.query('SELECT * FROM '+tableInput+';', function(err,result){
        if(err) throw err;
        cb(result)
   
    })

},
update: function(tableInput, condition, cb){
console.log('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';')
connection.query('UPDATE '+tableInput+' SET devoured=true WHERE id='+condition+';'
 ,function(err,result){
     
    if (err) throw err;
    cb(result);

})
},
create: function(tableInput,val,cb){
    connection.query('INSERT INTO '+tableInput+" (burger_name) Values ('"+val+"');", function(err,result){
        if(err) throw err;
        cb(result);
    })
}
}

module.exports=orm;
