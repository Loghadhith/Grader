import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import teacherRouter from "./router/teacher";
import cors from "cors"

dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors())

const port = process.env.PORT || 3000;

app.use("/api/teacher", teacherRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
