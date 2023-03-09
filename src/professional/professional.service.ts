import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SharedService } from 'src/shared/shared.service';
import { professionalDto } from './dto/professional.dto';
import { professional } from './dto/professional.schema';

@Injectable()
export class ProfessionalService {
    constructor(@InjectModel(professional.name) private professionalModel:Model<professional>,private sharedService:SharedService){}

    async createPro(params:professionalDto){
        try{
      const addPro=await this.professionalModel.create(params)
      if(addPro){
        return{
            statusCode:HttpStatus.OK,
            message:'Created Sucessfully',
            Profess:addPro
        }
        return {
            statusCode:HttpStatus.BAD_REQUEST,

        }
      }
       
    } catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async getPro(){
        try{
            const resp=await this.professionalModel.find()
             if(resp){
                return{
                    statusCode:HttpStatus.OK,
                    message:'list of Professtionals',
                    data:resp
                }
             }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

    
    async delPro(params:professionalDto){
        try{
         const remove =await this.professionalModel.deleteOne({professionalId:params.professionalId})
         if(remove){
            return {
                statusCode:HttpStatus.OK,
                message:'deleted sucessfully',
                del:remove
            }
         }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

    async updateProfession(params:professionalDto,image){
        try{
            if (image) {
                const reqDoc = image.map((doc, index) => {
                  let IsPrimary = false;
                  if (index == 0) {
                    IsPrimary = true;
                  }
                  const randomNumber = Math.floor(Math.random() * 1000000 + 1);
                  return doc.filename;
                });
        
                params.resume = reqDoc.toString();
              }
            const editProf=await this.professionalModel.updateOne(
                {professionalId:params.professionalId},
                {$set:{
                    name:params.name,
                    email:params.email,
                     phNumber:params.phNumber,
                     password:params.password,
                     resume:params.resume,
                     education:params.education,
                     experience:params.experience,
                     skills:params.skills,
                     gender:params.gender  
                    
                }}
            )
            if(editProf){
                return{
                    statusCode:HttpStatus.OK,
                    message:'updated Sucessfully',
                    edit:editProf
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }
}
