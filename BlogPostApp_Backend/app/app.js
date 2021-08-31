const Routes = require("./routes.js")

const express = require("express")
const app = express()


app.use(express.json())
app.use("/api" , Routes)


app.listen(3000, () => {
    console.log("Started...")
})