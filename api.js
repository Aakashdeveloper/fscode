var fs = require('fs');

fs.readFile('db.json','utf-8',function(err,data){
        if(err) throw err;
        console.log(data)
})
