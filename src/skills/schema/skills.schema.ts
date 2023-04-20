import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import {v4 as uuid} from 'uuid'

@Schema({timestamps:true})
export class skills extends Document{
    @Prop({default:uuid})
    skillsId:string
    @Prop()
    skillName:string
    
}

export const skillsSchema=SchemaFactory.createForClass(skills)