import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';

const app = express();


// middleare 
app.use(cors({

     origin:process.env.CORS_ORIGIN,
     credentials:true,
}))

app.use(express.json({limit:"16kb"})); // for json file
app.use(express.urlencoded({extended:true,limit:"16kb"})); // for url encoded
app.use(express.static("public")); // for local storage of file in public folder 
app.use(cookieParser);



app.listen(process.env.PORT, (res) => {
  console.log(`App is Running at ${process.env.PORT}`);
});




export {app}