import { Schema } from "@nestjs/mongoose";
import { Prop, SchemaFactory } from "@nestjs/mongoose/dist";

 
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
    Resume:string
    @Prop()
    Document:string
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
