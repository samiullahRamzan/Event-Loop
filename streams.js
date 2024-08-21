const fs=require('fs');
const server=require('http').createServer();


server.on('request',(req,res)=>{
    
    // solution 1
    // fs.readFile('./test.txt',(err,data)=>{
    //     if(err)
    //     console.log(err);
        
    //     res.end(data);
    // });

    // solution 2:streams
    // const stream=fs.createReadStream('est.txt');
    // stream.on('data',chunks=>{
    //     res.write(chunks);
    // })
    // stream.on('end',()=>{
    //     res.end();
    // })

    // stream.on('error',error=>{
    //     console.log(error);
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.end('<h1><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;File not found<h1>');
    //     res.statusCode=600;
    // })

    //solution :3 pipe
    const stream=fs.createReadStream('test.txt');
    stream.pipe(res);
    // readableSource.pipe(writeableDest)

});

server.listen(3000,'127.0.0.1',()=>{
    console.log('server is listening!')
})