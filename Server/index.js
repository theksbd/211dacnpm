const express = require('express')
const app = express()
const cors = require("cors");

const productRouter = require('./Routers/product.router')
const loginRouter = require('./Routers/login.router')
const connection = require('./Config/ConnectMySql')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000"
}));

app.use('/products',productRouter)
app.use('/login',loginRouter)

app.get('/',(req,res) => {
    res.send("Hello DACNPM")
})  

const PORT = 8080

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))