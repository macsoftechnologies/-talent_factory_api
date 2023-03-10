import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps:true})
export class learningOrg extends Document{
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
    resource:string
    @Prop()
    learningGoals:string
    @Prop()
    assesment:string
    @Prop()
    password:string

}
export const learningOrgSchema=SchemaFactory.createForClass(learningOrg)