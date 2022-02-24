import { Router } from "express";
import HomeController from "../controllers/HomeController";
import AboutController from "../controllers/AboutController";
import ContactController from "../controllers/ContactController";
import UserController from "../controllers/UserController";

const router = Router();

router.get("/", HomeController.show);
router.get("/contact", ContactController.show);
router.get("/about", AboutController.show);
router.get("/name", UserController.showUser);
router.get("/age", UserController.showAge);
router.post("/age", UserController.createAge);

export default router;
