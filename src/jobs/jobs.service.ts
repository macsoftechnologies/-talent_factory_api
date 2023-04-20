import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { organization } from 'src/organization/dto/organization.schema';
import { jobDto } from './dto/job.dto';
import { job } from './dto/job.schema';

@Injectable()
export class JobsService {

    constructor(@InjectModel(job.name) private jobModel:Model<job>,
                @InjectModel(organization.name) private organizationModel:Model<organization>){}


      

     async createJob(params:jobDto ){
        try{
            const find=await this.jobModel.findOne({jobId:params.jobId})
            if(find){
                let  now=new Date();
              const expireJob= await this.jobModel.deleteMany({expireDate:{$lte:now}}).exec();
                if(expireJob.deletedCount>0){
                    return {
                        statusCode:HttpStatus.BAD_REQUEST,
                        message:'Job has Expired',
                        
                    }
                }
            }
            const createdJob = new this.jobModel(params);
            return createdJob.save();

        
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
     }

    //  async expireJobs(params:jobDto){
    //         const now =new Date();
    //         await this.jobModel.deleteMany({expireDate:{$lte:now}}).exec()
    //    }


     async get(){
        try{
            const getJob=await this.jobModel.find()
            if(getJob){
                return {
                    statusCode:HttpStatus.OK,
                    message:'list jobs',
                    data:getJob
                }
            }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
     }

     async search(query:string){
        try{
            const regex=new RegExp(query,"i");
            const applicants=await this.jobModel.find({
                 $or:[
                    {title:regex},
                    {salary:regex},
                    {location:regex}

                 ]
            }).exec()
            return applicants
         }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
         }
     }

     
    }
