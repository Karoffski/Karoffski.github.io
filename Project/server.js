var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
    
    // Récupérer le fichier HTML
    if(req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
    
     // Récupérer le fichier CSS
    }else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
     
     // Récupérer le logo
    }else if(req.url.match("\.png$")){
        var pngPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(pngPath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    
     // Récupérer le fond d'écran
    }else if(req.url.match("\.jpg$")){
        var jpgPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(jpgPath);
        res.writeHead(200, {"Content-Type": "image/jpeg"});
        fileStream.pipe(res);
     
     // Traitement en cas d'erreur 404
    }else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }

// Site accessible à l'adresse indiquée ci-dessous
}).listen(7777);
console.log('SERVER IS UP: http://localhost:7777/');
