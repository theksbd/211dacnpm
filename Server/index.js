const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());

const productRouter = require('./Routers/product.router')
const loginRouter = require('./Routers/login.router')
const connection = require('./Config/ConnectMySql')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/products',productRouter)
app.use('/login',loginRouter)
require('./Routers/imagePro.router')(app);
require('./Routers/memory.router')(app);
require('./Routers/discountCode.router')(app);
require('./Routers/managerProduct.router')(app);
app.get('/',(req,res) => {
    res.send("Hello DACNPM")
})  

const PORT = 8080

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))