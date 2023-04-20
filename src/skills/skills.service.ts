import { HttpStatus, Injectable } from '@nestjs/common';
import { skills } from './schema/skills.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { skillsDto } from './dto/skills.dto';

@Injectable()
export class SkillsService {
    constructor(@InjectModel(skills.name) private skillsModel:Model<skills>){}

    async addSkills(params:skillsDto){
        try{
            const skillResp=await this.skillsModel.create(params)
            if(skillResp){
                 return{
                    statusCode:HttpStatus.OK,
                    resp:skillResp
                 }
                
            }
            return {
                statusCode:HttpStatus.BAD_REQUEST,
                message:'Invalid Request'
             }
            
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async getSkills(){
        try{
            const respskills=await this.skillsModel.find()
            if(respskills){
                return{
                statusCode:HttpStatus.OK,
                data:respskills
            }
           
        }
         return {
                statusCode:HttpStatus.BAD_REQUEST,
                messsage:'Invalid Request'
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

     async skillid(params:skillsDto){
        try{
            const respId=await this.skillsModel.findOne({skillsId:params.skillsId})
            if(respId){
                return{
                statusCode:HttpStatus.OK,
                data:respId
                }
                }
                return {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: "Invalid Request"
                }
            }catch(error){
                return{
                    statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                    message:error
                }
            }
        }


        async delSkills(params:skillsDto){
            try{
                const  removeskills=await this.skillsModel.deleteOne(params)
                if(removeskills){
                    return {
                        statusCode:HttpStatus.OK,
                        message:'deleted sucessfully',
                        del:removeskills
                    }
                }
                return {
                    statusCode: HttpStatus.BAD_REQUEST,
                    message: "Invalid Request"
                }
            }catch(error){
                return {
                    statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                    message:error 
                }
            }
        }

        
        async editSkills(params:skillsDto){
            try{
                const updateResp=await this.skillsModel.updateOne({skillsId:params.skillsId},
                    {$set:{skillName:params.skillName}})
                    if(updateResp){
                        return{
                            statusCode:HttpStatus.OK,
                            message:'updated Sucessfully',
                            edit:updateResp
                        }
                          
                    }else{
                    return {
                        statusCode: HttpStatus.BAD_REQUEST,
                        message: "Invalid Request"
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

