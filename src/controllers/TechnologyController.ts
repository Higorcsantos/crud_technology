import {Request,Response} from 'express'
import { getRepository } from 'typeorm';
import { Technology } from '../models/Technology';

class TechnologyController{
    async create(req: Request, res: Response){
        //Receber as informações do corpo da requisição
        const {
            name,
            description,
            article
        } = req.body;
        const technologiesRepository = getRepository(Technology);
        const technologyExists = await technologiesRepository.findOne({name});
        if(technologyExists){
            return res.status(400).json("Technology already exists");
        }
        const technology = technologiesRepository.create({
            name,
            description,
            article
        });
        technologiesRepository.save(technology);
        return res.status(200).json({message: "Tecnologia criada com sucesso"});
    }
}

export {TechnologyController}