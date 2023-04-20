import { Body, Controller, Get, HttpStatus, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { extname } from 'path';
import { professionalDto } from './dto/professional.dto';
import { ProfessionalService } from './professional.service';
import { diskStorage } from 'multer';

@Controller('professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) {}

  @ApiTags('professional')
  @ApiBody({
    type: professionalDto,
  })
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

  @ApiTags('professional')
  @ApiBody({
    type: professionalDto,
  })
  @Post('/login')
  async login(@Body() req:professionalDto) {
    try {
      const result = await this. professionalService.Login(req);
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

  @ApiTags('professional')
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

  @ApiTags('professional')
  @ApiBody({
    type: professionalDto,
  })
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

  @ApiTags('professional')
  @ApiBody({
    type: professionalDto,
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



  @ApiTags('professional')
  @ApiBody({
    type: professionalDto,
  })
  @Post('/getProfessionById')
  async profget(@Body() body:professionalDto){
    try{
     const response=await this.professionalService.getProfesstionId(body)
     return response
  }catch(error){
    return {
      statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
      message:error 
    }
  }
}


}