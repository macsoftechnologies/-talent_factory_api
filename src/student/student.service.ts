import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { SharedService } from "src/shared/shared.service";
import {  studentDto } from "./dto/student.dto";
import { student } from "./dto/student.schema";

@Injectable()
export class StudentService {
    constructor(@InjectModel(student.name) private studentModel:Model<student>,private sharedService:SharedService){}
    
  async createStudent(params:studentDto){
    try{
        const addStudent=await this.studentModel.create(params)
        if(addStudent){
            return {
                statusCode:HttpStatus.OK,
                message:'created Sucessfully',
                create:addStudent
            }
        }
    }catch(error){
        return{
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
  }

 
  async studentget(){
    try{
        const getdata=await this.studentModel.find()
        if(getdata){
            return {
                statusCode:HttpStatus.OK,
                message:'list of students',
                data:getdata
            }
        }
    }catch(error){
        return {
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
  }


   async delStudent(param:studentDto){
    try{
        const removestu=await this.studentModel.deleteOne({studentId:param.studentId})
        if(removestu){
            return {
                statusCode:HttpStatus.OK,
                message:'deleted sucessfully',
                del:removestu
            }
        }
    }catch(error){
        return {
            statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
            message:error 
        }
    }
   }

   async Login(req: studentDto) {
    try {
      const loginRes = await this.studentModel
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



   async updatestudent(req:studentDto,image){
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
    
            req.resume = reqDoc.toString();
          }
   const editstudent=await this.studentModel.updateOne(
    {studentId:req.studentId},
    {$set:{
      name:req.name,
     email:req.email, 
     phNumber:req.phNumber,
     password:req.password,
     resume:req.resume,
     address:req.address,
     education:req.education,
     gender:req.gender,
     firstName:req.firstName,
     lastName:req.lastName

    }})

    if(editstudent){
        return {
            statusCode:HttpStatus.OK,
            message:'updated sucessfully',
            edit:editstudent
        }
    }
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
}

}