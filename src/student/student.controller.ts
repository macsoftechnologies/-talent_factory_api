import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { studentDto } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/createStudent')
  async addStudent(@Body() body:studentDto){
     try{
      const response=await this.studentService.createStudent(body)
      return response
     }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error    
      }
     }
  }


  @Get('/getStudents')
  async dataget(){
    try{
      const response=await this.studentService.studentget()
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }


  @Post('/deleteStudent')
  async delStudent(@Body() body:studentDto){
    try{
      const result=await this.studentService.delStudent(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
