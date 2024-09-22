import * as petController from "../controllers/pet.controller.js";
import { Router } from "express";
const router = Router();

router.post("/create", petController.createPets);

router.get("/", petController.getPets);

export default router;
