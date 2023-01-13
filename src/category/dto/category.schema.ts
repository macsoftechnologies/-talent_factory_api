import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps:true})
export  class category extends Document{
    @Prop()
    categoryName:string
     
    
}
export const categorySchema=SchemaFactory.createForClass(category)