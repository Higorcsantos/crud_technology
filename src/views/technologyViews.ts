import { Technology } from "../models/Technology"
import imagesView from "./ImagesView";


class TechnologyViews{
    
    render(technology: Technology){
        return{
            name: technology.name,
            description: technology.description,
            article: technology.article,
            images: imagesView.renderMany(technology.images),
        }
    }
    renderMany(technologies: Technology[]){
        return technologies.map(technology => this.render(technology));
    }
}

export {TechnologyViews}