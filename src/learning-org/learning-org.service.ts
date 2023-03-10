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


}
