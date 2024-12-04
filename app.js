import mongose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { Test } from "./backend/controllers/cancion_controller.js";

dotenv.config()
mongoose.Connect(process.env.url_bd)
.then(()=>{
    console.log("Si esta funcionando")
})
.catch((error)=>{
    console.log("No funciona la conexion", error)
})

const app = express();
app.use(cors());
app.listen(4004, ()=>{
    console.log("Se escucha el servidor")
})

test({})



