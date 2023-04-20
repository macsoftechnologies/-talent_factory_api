import { Body, Controller, Get, HttpStatus, Post, SetMetadata, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { studentDto } from './dto/student.dto';
import { StudentService } from './student.service';
import {diskStorage} from 'multer'
import { ApiBody, ApiTags } from '@nestjs/swagger';
 

 


  
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}


   @ApiTags('student')
  @ApiBody({
    type: studentDto,
  })
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

  @ApiTags('student')
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


  @ApiTags('student')
  @ApiBody({
    type: studentDto,
  })
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


  @ApiTags('student')
  @ApiBody({
    type: studentDto,
  })
  @Post('/loginstudent')
  async Login(@Body() req:studentDto) {
    try {
      const result = await this.studentService.login(req);
     return result
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        msg: error,
      };
    }
  }
 

  @ApiTags('student')
  @ApiBody({
    type: studentDto,
  })
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


@ApiTags('student')
@ApiBody({
  type: studentDto,
})
@Post('/getStudentById')
async studentId(@Body() body:studentDto){
  try{
    const response=await this.studentService.getStudentId(body)
    return response
  }catch(error){
    return {
      statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
      message:error 
    }
  }
}
}
