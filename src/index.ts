import routes from "./routes";
import "./database/config/connection";
import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerui from "swagger-ui-express";
import swaggerSetup from "./utilities/swaggerConfig";

dotenv.config();
const PORT = 3000;
const app: Express = express();

swaggerSetup(app);

app.get('/', (rep: express.Request, res: express.Response)=>{
    res.status(200).json({
      Greetings: `Welcome to My Brand Backend! It's a pleasure to have you here.`
    })
  })
app.use(express.json());
app.use(cors());
app.use("/api", routes);
app.listen(PORT, () => console.log(`Server listening at ${PORT})`));

export default app;
