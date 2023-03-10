import { Body, Controller, Get, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { studentDto } from './dto/student.dto';
import { StudentService } from './student.service';
import {diskStorage} from 'multer'

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


  @Post('/login')
  async login(@Body() req:studentDto) {
    try {
      const result = await this.studentService.Login(req);
      if (result) {
        return result;
      }
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        msg: 'Invalid credentials',
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        msg: error,
      };
    }
  }
  
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: diskStorage({
        destination: './files',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
@Post('updateStudent')
async updateVendor(@Body() body:studentDto,@UploadedFiles() image){
  try{
    const response=await this.studentService.updatestudent(body,image)
    return response
  }catch(error){
    return {
      statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
      message:error 
      
    }
  }
}
}
