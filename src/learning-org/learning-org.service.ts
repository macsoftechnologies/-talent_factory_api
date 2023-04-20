import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { learningOrgDto } from './dto/learingOrg.dto';
import { learningOrg } from './dto/learningOrg.schema';
 
@Injectable()
export class LearningOrgService {
    constructor(@InjectModel(learningOrg.name) private learningOrgModel:Model<learningOrg>){}
    

    async createOrg(params:learningOrgDto){
        try{
            const addOrg=await this.learningOrgModel.create(params)
            if(addOrg){
                return{
                    statusCode:HttpStatus.OK,
                    message:'Sucessfully added',
                    org:addOrg
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async Login(req: learningOrgDto) {
        try {
          const loginRes = await this.learningOrgModel
            .findOne({ $or: [{ email: req.email }] })
            .lean();
          if (loginRes) {
            if (loginRes.password === req.password) {
              return {
                statusCode: HttpStatus.OK,
                message: 'Login SuccessFully',
                logindetails: loginRes,
              };
            }
            return {
              statusCode: HttpStatus.BAD_REQUEST,
              message: 'Invalid Password',
            };
          }
          return {
            statusCode: HttpStatus.NOT_FOUND,
            msg: 'User Not Found',
          };
        } catch (error) {
          return {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: error.message,
          };
        }
      }

   

      
      async learnOrg(){
        try{
          const orgResp=await this.learningOrgModel.find()
          if(orgResp){
            return{
              statusCode:HttpStatus.OK,
              message:'list of learning Organization',
              data:orgResp
            }
          }return {
            statusCode:HttpStatus.BAD_REQUEST,
            message:'Invalid Request'
          }
        }catch(error){
          return{
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
          }
        }
      }



      async learrnOrgId(params:learningOrgDto){
        try{
          const orgIdResp=await this.learningOrgModel.findOne({learningOrgId:params.learningOrgId})
          if(orgIdResp){
            return{
              statusCode:HttpStatus.OK,
              data:orgIdResp
            }
          }return{
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


    async dellearnOrg(params:learningOrgDto){
      try{
        const removeOrg=await this.learningOrgModel.deleteOne({learningOrgId:params.learningOrgId})
        if(removeOrg){
          return {
            statusCode:HttpStatus.OK,
            message:'deleted Sucessfully',
            del:removeOrg
          }
        }return {
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


    async editlearnOrg(params:learningOrgDto){
      try{
        const editresp=await this.learningOrgModel.updateOne({learningOrgId:params.learningOrgId},
          {$set:{
            name:params.name,
            email:params.email,
            description:params.description,
            Location:params.Location,
            phoneNumber:params.phoneNumber,
            memebers:params.memebers,
            courses:params.courses,
            password:params.password
                  }})
           if(editresp){
            return {
              statusCode:HttpStatus.OK,
              message:'updated Sucessfully',
              edit:editresp
            }
           }return{
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
}
