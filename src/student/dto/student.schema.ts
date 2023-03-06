import { Prop,  Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from 'uuid';
@Schema({timestamps:true})
export class student extends Document{
    @Prop({default:uuid})
    studentId:string
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    phNumber:string
    @Prop()
    password:string
}

export const studentSchema=SchemaFactory.createForClass(student)
