import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Document } from "mongoose"
import {v4 as uuid} from 'uuid'

@Schema({timestamps:true})
export class job extends Document{

    @Prop({default:uuid})
    jobId:string
    
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
   @Prop({type: Date,default:Date.now})
   postedDate:string
   @Prop({type: Date})
   expireDate:Date
   @Prop()
   isActive:boolean
}

export const jobSchema=SchemaFactory.createForClass(job)

 

