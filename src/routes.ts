import {Router} from 'express'
import { TechnologyController } from './controllers/TechnologyController';

const technologyController = new TechnologyController;
const router = Router();

router.post("/technology", technologyController.create)
export {router};