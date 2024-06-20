import express from "express";
import {
  saveBug,
} from "../controllers/bugs/bugsControllers";
const router = express.Router();

router.post("/saveBug", saveBug);

module.exports = router;
