const express = require('express')
const app = express()

const connection = require('./Config/ConnectMySql')

app.get('/',(req,res) => {
    res.send("Hello DACNPM")
})

const PORT = 8080

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))