import { Column, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';
import { Image } from "./Image";


@Entity("technologies")
class Technology{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    article: string;

    @OneToMany(() => Image, image => image.technology,{
        cascade: ['insert','update','remove']
    })
    @JoinColumn({name: 'technology_id'})
    images: Image[];

    //Gerar um id quando a classe for criada
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Technology}