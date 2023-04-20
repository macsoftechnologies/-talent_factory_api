import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { applicantDto } from './dto/applicant.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('applicant')
export class ApplicantController {
  constructor(private readonly applicantService: ApplicantService) {}

  @ApiTags('applicant')
  @ApiBody({
    type: applicantDto,
  })
  @Post('addaplicant')
  async addAplicant(@Body() body:applicantDto){
     try{
      const response=await this.applicantService.addapplicant(body)
      return response
     }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        mesage:error 
      }
     }
  }

  @ApiTags('applicant')
  @Get('applicantList')
  async getApplicants(){
    try{
      const response=await this.applicantService.getapplicants()
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  
  @ApiTags('applicant')
  @ApiBody({
    type: applicantDto,
  })
  @Post('/removeApplicant')
  async delApplicant(@Body() body:applicantDto){
    try{
      const response=await this.applicantService.delApplicant(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  
  @ApiTags('applicant')
  @ApiBody({
    type: applicantDto,
  })
  @Get('/searchApplicants')
  async searchApplicants(@Query('query') query:string){
    try{
      const result=await this.applicantService.searchapplicants(query)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error  
      }
    }
  }

}
