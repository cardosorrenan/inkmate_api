import { Router } from 'express';
import { GallonController } from './controllers/GallonController'

const router = Router();

const gallonController = new GallonController();

router.get("/get_gallons", gallonController.query);

export { router };