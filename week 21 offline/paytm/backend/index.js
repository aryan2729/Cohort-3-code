import express from "express";
import cors from "cors";
import mainRouter from "./routes/index.js";

const app = express();

app.use(cors());                // used curse cuz backend & frontend on different 
app.use(express.json());        // body parse 



app.use("/api/v1/", mainRouter);        // so whatever comes after  v1 come all it goes to /api/v1/mainRouter 
  


app.listen(3000);