import express from "express";
import bodyParser from "body-parser";

import { router } from "./routes/loginRoutes";
import { router as rootRouter } from "./routes/rootRoutes";
import cookieSession from "cookie-session";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["super-secret-key"] }));

app.use(rootRouter);
app.use(router);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
