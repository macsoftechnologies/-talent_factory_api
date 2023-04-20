import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { organizationDto } from './dto/organization.dto';
import { organization } from './dto/organization.schema';
 

@Injectable()
export class OrganizationService {
    constructor(@InjectModel(organization.name) private organizationModel:Model<organization>){}

    async addOrganization(params:organizationDto){
        try{
            const addOrg=await this.organizationModel.create(params)
            if(addOrg){
                return {
                    statusCode:HttpStatus.OK,
                    message:'created Sucessfully',
                    data:addOrg
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }


    async Login(req: organizationDto) {
        try {
          const loginRes = await this.organizationModel
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

    
      
    async getOrg(){
        try{
            const getOrg=await this.organizationModel.find()
            if(getOrg){
                return {
                    statusCode:HttpStatus.OK,
                    message:'list of organization',
                    data:getOrg
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

    async deleteOrg(params:organizationDto){
        try{
            const delorg=await this.organizationModel.deleteOne({organizationId:params.organizationId})
           if(delorg){
            return {
                statusCode:HttpStatus.OK,
                message:'deleted Sucessfully',
                del:delorg
            }
           }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
    }

    async editOrg(params:organizationDto){
     try{
        const edit =await this.organizationModel.updateOne(
            {organizationId:params.organizationId},
            {$set:{
                name:params.name,
                email:params.email,
                phoneNumber:params.phoneNumber,
                password:params.password,
                description:params.description,
                location:params.location
              }}
        )
        if(edit){
            return {
                statusCode:HttpStatus.OK,
                message:'updated sucessfully',
                updated:edit
            }
        }
     }catch(error){
        return{
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
     }
    }


    async getOrgId(params:organizationDto){
      try{
        const orgResp=await this.organizationModel.findOne({organizationId:params.organizationId})
        if(orgResp){
          return{
            statusCode:HttpStatus.OK,
            data:orgResp
          }
        }return{
          statusCode:HttpStatus.BAD_REQUEST,
          message:'Invalid Reqest'
        }
      }catch(error){
        return {
          statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
          message:error 
        }
      }
    }
}
