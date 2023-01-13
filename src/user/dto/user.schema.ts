import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";
import {Document} from 'mongoose'
 
@Schema({timestamps:true})
export class User extends Document{
    @Prop()
    firstName:string
    @Prop()
    lastName:string
    @Prop()
    userName:string
    @Prop()
    password:string
    @Prop()
    resume:string
    @Prop()
    document:string
    @Prop()
    Date:string
    @Prop()
    email:string
    @Prop()
    mobileNumber:string 
    @Prop()
    Skill:string
    @Prop({ default: 'active', enum: ['active', 'suspend'] })
    status:string
    @Prop({enum:['admin','Super-admin','employer','candidate']})
    role:string
     
    
}

export const userSchema=SchemaFactory.createForClass(User)
