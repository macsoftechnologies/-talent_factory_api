import { Prop,  Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from 'uuid';
@Schema({timestamps:true})
export class student extends Document{
    @Prop({default:uuid})
    studentId:string
    @Prop()
    firstName:string
    @Prop()
    lastName:string
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    phNumber:string
    @Prop()
    password:string
    @Prop()
    resume:string
    @Prop()
    address:string
    @Prop()
    education:string
    @Prop()
    gender:string
    

}

export const studentSchema=SchemaFactory.createForClass(student)
