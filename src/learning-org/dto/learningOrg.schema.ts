import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {v4 as uuid} from 'uuid';
import { Document } from "mongoose";

@Schema({timestamps:true})
export class learningOrg extends Document{
    @Prop({default:uuid})
    learningOrgId:string
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    description:string
    @Prop()
    Location:string
    @Prop()
    phoneNumber:string
    @Prop()
    memebers:string
    @Prop()
    courses:string
    @Prop()
    assesment:string
    @Prop()
    password:string

}
export const learningOrgSchema=SchemaFactory.createForClass(learningOrg)