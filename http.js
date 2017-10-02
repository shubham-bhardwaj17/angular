// Accessing to the file system//

var fs = require('fs');
fs.writeFile('./output.txt', 'Something Write here', function(){
       console.log("1. Writing  to output.txt is done");
});

fs.readFile('./input.txt', 'utf-8', function(err, data){

    fs.appendFile('./output.txt', data, function(){
            console.log("2. Appending to output.txt is done");
    });
           console.log("3. Reading to input.txt is done");
});

fs.readFile('./input1.txt', 'utf-8', function(err, data){
    
        fs.writeFile('./output.txt', data, function(){
                console.log("4. Appending to output.txt is done");
        });
               console.log("5. Reading to input1.txt is done");
    });
    
