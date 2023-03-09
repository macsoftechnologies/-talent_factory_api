import { Body, Controller, Get, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiBody } from '@nestjs/swagger';
import { extname } from 'path';
import { professionalDto } from './dto/professional.dto';
import { ProfessionalService } from './professional.service';
import { diskStorage } from 'multer';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}


  @Post('/createProfessional')
  async addProfession(@Body() body:professionalDto){
    try{
      const response=await this.professionalService.createPro(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Get()
  async proget(){
    try{
      const result=await this.professionalService.getPro()
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }


  @Post('/deleteProfession')
  async removepro(@Body() body:professionalDto){
    try{
      const response=await this.professionalService.delPro(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
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
  @Post('/updateProfessional')
  async updateVendor(@Body() body:professionalDto,@UploadedFiles() image){
    try{
      const response=await this.professionalService.updateProfession(body,image)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
