const app=require("express")(),
	server=require("http").createServer(app),
	port=8080;
app.get("/",function(req,res){
   var IP =  req.headers['x-forwarded-for'] || req.connection.remoteAddress;
   console.log("IP: "+IP);
   res.sendFile(__dirname+"/pepe.jpg");
});
server.listen(port);