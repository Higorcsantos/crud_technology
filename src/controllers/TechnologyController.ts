import {Request,response,Response} from 'express'
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
    async index(req: Request, res: Response){
        const technologiesRepository = getRepository(Technology);
        const technologies = await technologiesRepository.find();
        return res.json(technologies);
    }
    async show(req: Request, res: Response){
        const {id} = req.params;
        const technologiesRepository = getRepository(Technology);
        const technology = await technologiesRepository.findOne({id});
        if(!technology){
            return res.status(400).json({error: "A tecnologia não existe"});
        }
        return res.json(technology);
    }
    async update(req: Request, res: Response){
        const {description,article} = req.body;
        const {id} = req.params;
        const technologiesRepository = getRepository(Technology);
        const technologyUpdate = await technologiesRepository.update({id},{description, article});
        
        return res.json({message: "Tecnologia alterada com sucesso"});
    }
    async delete(req:Request,res:Response){
        const {id} = req.params;
        const technologiesRepository = getRepository(Technology);
        const technology = technologiesRepository.findOne({id});
        if(!technology){
            return res.status(401).json({error: "A tecnologia não existe"});
        }
        const technologyDelete = await technologiesRepository.delete({id});
        technologyDelete;
        return res.json({message: 'deletado com sucesso'})
        
    }
}

export {TechnologyController}