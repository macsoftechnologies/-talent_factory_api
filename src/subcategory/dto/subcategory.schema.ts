import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema({timestamps:true})
export class subcategory extends Document{
    @Prop()
    subcategoryName:string

}
export const subcategorySchema=SchemaFactory.createForClass(subcategory)
