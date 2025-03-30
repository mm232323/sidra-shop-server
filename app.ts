import express from 'express'
import bodyParser from 'body-parser'
import AuthRouter from './router/auth'
import {connectToDB} from './util/db-config'

const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: false }))

// Middleware to handle CORS
app.use((req, res,next) => {   
    res.header("Access-Control-Allow-Origin", "*"); // Allow requests from any origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

const main = async () => {
    try {
        await connectToDB()
        console.log("Connected Successfully to the database")
    }
    catch {
        console.log("Error occurred while connecting to the database")
    }
}
main()

app.get("/", (req,res) => {
    res.send("<h1>Sidra honey shop server</h1>")
})

app.use("/auth",AuthRouter)

app.listen(5000)