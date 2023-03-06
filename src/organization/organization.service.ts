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
}
