const http=require('http');

const myserver=http.createServer((req,res) =>{
 
    if(req.url =="/"){
        res.end('this is ABES homepage');
    }
    else if(req.url =='/about')
    {
        res.end('this is about us page of ABES Engineering College');
    }
     else if(req.url =='/contactus')
    {
        res.end('this is contact us page of ABES Engineering College');
    }
    else{
        res.end('404 this page is not found');
    }
})
myserver.listen(8000, () => {console.log('server is run');});
