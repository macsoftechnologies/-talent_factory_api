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
   
}

export const jobSchema=SchemaFactory.createForClass(job)