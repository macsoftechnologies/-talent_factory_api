import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import {v4 as uuid} from 'uuid'
import { Document } from "mongoose"

@Schema({timestamps:true})
export class applicant extends Document{
    @Prop({default:uuid})
    applicantId:string
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    phoneNumber:string
    @Prop()
    jobId:string
}

export const applicantSchema=SchemaFactory.createForClass(applicant)
