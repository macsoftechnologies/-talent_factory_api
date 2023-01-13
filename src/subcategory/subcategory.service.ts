import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';
import { subcategoryDto } from './dto/subcategory.dto';
import { subcategory } from './dto/subcategory.schema';

@Injectable()
export class SubcategoryService {
    constructor(@InjectModel(subcategory.name) private subcategoryModel:Model<subcategory>){}
    
    async createsubcategory(param:subcategoryDto){
        try{
            const duplicatecategory=await this.subcategoryModel.findOne({
                subcategoryName:param.subcategoryName,
                isDeleted:false
            })
            if(duplicatecategory){
                return {
                    statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                    message:'category Name is already exits',
                    data:null
                }
            }

             let response = {
                statusCode: HttpStatus.OK,
                data: await this.subcategoryModel.create(param),
                message: param.subcategoryName + ' created successfully',

             }
             return response;
        }catch(error){
            let error_response = {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                data: null,
                message: error,
              };
              return error_response;
            }
}

}