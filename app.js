import 'dotenv/config'
import express from "express";
import NbaController from './src/nba_controller.js';

const app = express();
app.use(express.json());
app.listen(process.env.PORT || 4000);
NbaController(app);