import { HttpStatus, Injectable } from '@nestjs/common';
import { applicant } from './dto/applicant.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { applicantDto } from './dto/applicant.dto';

@Injectable()
export class ApplicantService {

    constructor(@InjectModel(applicant.name) private applicantModel:Model<applicant>){}

    
  async addapplicant(params:applicantDto){
    try{
        const  applicantreq=await this.applicantModel.create(params)
        if(applicantreq){
            return {
                statusCode:HttpStatus.OK,
                messagee:'apply job Sucessfully',
                req:applicantreq
            }
        }
    }catch(error){
        return{
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
  }


  async getapplicants(){
    try{
        const applicantreq=await this.applicantModel.find()
        if(applicantreq){
            return {
                statusCode:HttpStatus.OK,
                message:'list of applicants',
                data:applicantreq
            }
        }
    }catch(error){
        return {
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
  }

  async delApplicant(params:applicantDto){
    try{
        const removeApplicant=await this.applicantModel.deleteOne({applicantId:params.applicantId})
        if(removeApplicant){
            return {
                statusCode:HttpStatus.OK,
                message:'deleted Sucessfully',
                del:removeApplicant
            }
        }
    }catch(error){
        return {
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
  }


  async searchapplicants(query:string){
    try{
        const regex=new RegExp(query,"i")
        const applicant=await this.applicantModel.find({
            $or:[
                {name:regex}
            ]
        }).exec()
    }catch(error){
        return{
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
  }
}
