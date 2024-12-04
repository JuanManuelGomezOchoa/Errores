import { schema, model } from "mongoose";

const esquemacancion = new Schema({
    name:{
        type: String
    },
    singer:{
        type: String
    }
})

export const modelo1 = new model("Tabla de canciones", esquemaCancion)
