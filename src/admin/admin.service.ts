import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { adminDto } from './dto/admin.dto';
import { admin } from './dto/admin.schema';
 
@Injectable()
export class AdminService {
    constructor(@InjectModel(admin.name) private adminModel:Model<admin>){}

    async create(params:adminDto){
        try{
        const  adminAdd=await this.adminModel.create(params)
    if(adminAdd){
        return {
            statusCode:HttpStatus.OK,
            data:adminAdd
        }
    }
        }catch(error){
            return {
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
        }
}



async Login(req: adminDto) {
    try {
      const loginRes = await this.adminModel
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