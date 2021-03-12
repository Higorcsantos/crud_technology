import { Column, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'

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

    //Gerar um id quando a classe for criada
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Technology}