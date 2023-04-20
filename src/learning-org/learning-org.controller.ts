import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import {  learningOrgDto } from './dto/learingOrg.dto';
import { LearningOrgService } from './learning-org.service';
import { ApiBody, ApiTags} from '@nestjs/swagger';

@Controller('learning-org')
export class LearningOrgController {
  constructor(private readonly learningOrgService: LearningOrgService) {}
 
  @ApiTags('learning-org')
  @ApiBody({
    type: learningOrgDto,
  })
    @Post('/AddlearnOrg')
    async learningOrg(@Body() body:learningOrgDto){
      try{
        const response=await this.learningOrgService.createOrg(body)
        return response
      }catch(error){
        return {
          statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
          message:error
        }
      }
    }

    @ApiTags('learning-org')
    @ApiBody({
      type: learningOrgDto,
    })
  @Post('/login')
  async login(@Body() req:learningOrgDto) {
    try {
      const result = await this.learningOrgService.Login(req);
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


  @ApiTags('learning-org')
  @Get('/getLearningOrg')
  async orgGet(){
    try{
      const response=await this.learningOrgService.learnOrg()
      return response
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('learning-org')
  @ApiBody({
      type: learningOrgDto,
    })
  @Post('/getlearnOrgById')
  async geidlearn(@Body() body:learningOrgDto){
    try{
      const result=await this.learningOrgService.learrnOrgId(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  

  @ApiTags('learning-org')
  @ApiBody({
    type: learningOrgDto,
  })
  @Post('/deletelearnOrg')
  async removelearOrg(@Body() body:learningOrgDto){
    try{
      const result=await this.learningOrgService.dellearnOrg(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.OK,
        message:error 
      }
    }
  }

  @ApiTags('learning-org')
  @ApiBody({
    type: learningOrgDto,
  })
  @Post('/UpdatelearningOrg')
  async learningOredit(@Body() body:learningOrgDto){
    try{
      const result=await this.learningOrgService.editlearnOrg(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
    }
  }
}

}