import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
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


}
