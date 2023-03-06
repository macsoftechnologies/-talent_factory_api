import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { v4 as uuid } from 'uuid';
@Schema({timestamps:true})
export class organization extends Document{
    @Prop()
    name:string
    @Prop()
    email:string
    @Prop()
    phNumber:string
    @Prop()
    password:string
    @Prop({default:uuid})
    organizationId:string
}
export const organizationSchema=SchemaFactory.createForClass(organization)