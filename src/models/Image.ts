import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Technology } from "./Technology";
import {v4 as uuid} from 'uuid'

@Entity('images')
class Image{
    @PrimaryColumn()
    readonly id: string;

    @Column()
    path: string

    @ManyToOne(() => Technology, technology=> technology.images)
    @JoinColumn({name: 'technology_id'})
    technology: Technology

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export {Image}