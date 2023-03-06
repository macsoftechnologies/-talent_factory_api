import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { jobDto } from './dto/job.dto';
import { job } from './dto/job.schema';

@Injectable()
export class JobsService {

    constructor(@InjectModel(job.name) private jobModel:Model<job>){}


     async createJobs(params:jobDto,id:string){
        try{
            const  jobresp=await this.jobModel.findById(id).exec();
           
            
            const createJob=new this.jobModel(params)
            return createJob.save()

        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }

     }
}
