import {Router} from 'express'
import { TechnologyController } from './controllers/TechnologyController';

const technologyController = new TechnologyController;
const router = Router();

router.post("/technology", technologyController.create);
router.get("/technology",technologyController.index);
router.get("/technology/:id",technologyController.show);
router.put("/technology/:id",technologyController.update);
router.delete("/technology/:id",technologyController.delete);
export {router};