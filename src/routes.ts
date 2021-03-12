import {Router} from 'express';
import multer from 'multer';
import { TechnologyController } from './controllers/TechnologyController';
import uploadConfig from './config/upload';

const technologyController = new TechnologyController;
const upload = multer(uploadConfig);
const router = Router();

router.post("/technology",upload.array('images'), technologyController.create);
router.get("/technology",technologyController.index);
router.get("/technology/:id",technologyController.show);
router.put("/technology/:id",technologyController.update);
router.delete("/technology/:id",technologyController.delete);
export {router};