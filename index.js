
let fs =require ("fs");

let products =JSON.parse(fs.readFileSync("products.json","utf-8")) 
// console.log(products)

const http = require("http");
const { stringify } = require("querystring");

const server =http.createServer (function(request,response){

    const urls= request.url.split('/')

    if(urls[1]=="home"){

        let html=fs.readFileSync("index.html",'utf-8');
        response.write(html);
    }

    else if (urls[1]=="products"){
        let product =JSON.stringify(products)
        response.write(product)

    }

    else if (urls[1]=="products" && parseInt(urls[2]) ){

        let id = urls[2]-1
        selectedProduct= products[id];
        let product =JSON.stringify(selectedProduct)
        response.write(product);
    }

    else
        {
            response.writeHead(404);
            response.write('<h1>notfound</h1>')
        }

    // response.write("hii from server");
    response.end()

})


server.listen(4000, function(){
    console.log("hi sherein")

})

