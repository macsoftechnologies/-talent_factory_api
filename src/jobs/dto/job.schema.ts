import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"

@Schema({timestamps:true})
export class job extends Document{
    @Prop()
    title:string
    @Prop()
    description:string
    @Prop()
    salary:string
    @Prop()
   company:string
    @Prop()
   location:string
   @Prop()
   postedDate:string
   @Prop()
   expireDate:string
   @Prop()
   isActive:boolean
}

export const jobSchema=SchemaFactory.createForClass(job)