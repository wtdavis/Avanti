// import express from "express"
const express = require("express")
const app = express()
const port = 3000

app.use("/", (req, res) => {
    res.send("200 OK")
})
// 1234
app.listen(port)