const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs', 'html')
  .get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/math.html')))
  .get('/math', (req, res) =>{
    const num1=req.query.quantity1; console.log(num1)
    const num2=req.query.quantity2;
const operation=req.query.operation;
let result=0;
    switch(operation){
      case '+':
          
          result = parseFloat(num1) + parseFloat(num2);
       
         
          break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
          break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
          break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
          break;
     
      default:
          res.writeHead(400, {"Content-Type": "text/html"});
          res.write("The operation is not supproted")
          res.end();
  }

    res.render('pages/results',{num1:num1, num2:num2, operation:operation, result:result})})
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))