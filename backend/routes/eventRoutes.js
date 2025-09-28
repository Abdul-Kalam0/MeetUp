import express, { Router } from "express";
import {
  createEvent,
  getAllEvents,
  getEventById,
} from "../controllers/eventControllers.js";

const router = express.Router();

router.post("/", createEvent);
router.get("/", getAllEvents);
router.get("/:eventId", getEventById);

export default router;
