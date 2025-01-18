
import dotenv from "dotenv"
import connectdb from "./db/index.js";

dotenv.config({
    path:"./env"
})



connectdb()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port :,${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongodb connection error",error);
})







