import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { professionalDto } from './dto/professional.dto';
import { ProfessionalService } from './professional.service';

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
}
