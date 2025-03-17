import express from "express";
import router from "./modules/index.module.js";
import cors from "cors";

const app = express();
const PORT = 5090;

app.use(cors()); // CORS 해결
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started! ${PORT}`);
});
