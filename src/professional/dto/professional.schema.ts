import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from 'uuid';
@Schema({timestamps:true})
export class professional extends Document{
    @Prop({default:uuid})
    professionalId:string
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    phNumber:string
    @Prop()
    gender:string
    @Prop()
    password:string
    @Prop()
    education:string
    @Prop()
    experience:string
    @Prop()
    skills:string
    @Prop()
    resume:string
    
}

export const professionalSchema=SchemaFactory.createForClass(professional)