'use strict';
const http = require('http');
const queryString = require('querystring');
const server = http.createServer((req,res)=>{
    const method = req.method;
    const url = req.url;
    const path = url.split('?')[0];
    const query = queryString.parse( url.split('?')[1] );
    res.setHeader('Content-type','application/json');
    let resData = {
        method,
        url,
        path,
        query
    }
    if('GET'===method){
        res.end(JSON.stringify(resData))
    }else if('POST'===method){
        let postData = '';
        req.on('data',chunk=>{
            postData += chunk.toString();
        })
       
        req.on('end',()=>{
            resData.postData = postData ;
            res.end(JSON.stringify(resData))
        })
    }
})
server.listen(8000);