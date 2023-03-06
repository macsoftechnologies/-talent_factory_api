import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { studentDto } from "./dto/student.dto";
import { student } from "./dto/student.schema";

@Injectable()
export class StudentService {
    constructor(@InjectModel(student.name) private studentModel:Model<student>){}
    
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

}
