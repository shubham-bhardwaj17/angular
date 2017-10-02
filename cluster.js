var cluster = require('cluster');
var numCPUs = require('OS').cpus().length;

cluster.setupMaster({
    exec : dirname + './http.js',
    args : [],
    silent : false
});

for(var i=0 ; i<numCPUs.length ; i++){
    cluster.fork();
}

cluster.on('listentng', function(workers, address){
     
    console.log("Workers:" + workers.id +
                 "Address:" + address.port);
});

cluster.on('exit', function(workers, code, signal){
      
    if(workers.suicide===true){
        console.log('Intentional Exit');
    } else {
        cluster.fork();
    }
});