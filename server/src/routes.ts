import express from "express";
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";
import multerConfig from "./config/multer";
import multer from "multer";

const routes = express.Router();
const itemsController = new ItemsController();
const pointsController = new PointsController();
const upload = multer(multerConfig);

//rotas item
routes.get("/items", itemsController.index);

//rotas points
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);

routes.post("/points", upload.single("image"), pointsController.create);

export default routes;
