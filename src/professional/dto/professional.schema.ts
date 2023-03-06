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
    password:string

}

export const professionalSchema=SchemaFactory.createForClass(professional)