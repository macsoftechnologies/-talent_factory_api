import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { categoryDto } from './dto/category.dto';
import { category } from './dto/category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(category.name) private categoryModel:Model<category>){}
    
    async createCategory(param:categoryDto){
        try{
            const duplicatecategory=await this.categoryModel.findOne({
                categoryName:param.categoryName,
                isDelted:false
            })
            if(duplicatecategory){
                return {
                    statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                    message:'categoryname is already exits',
                    data:null
 
                }
            }
            let response={
                statusCode:HttpStatus.OK,
                message:'category name added sucessfully',
                data:await this.categoryModel.create(param)

            }
            return response
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error,
                data:null
            }
        }
    }


     
}
