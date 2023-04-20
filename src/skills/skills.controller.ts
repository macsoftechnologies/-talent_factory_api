import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { skillsDto } from './dto/skills.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}


  @ApiTags('skills')
  @ApiBody({
    type: skillsDto
  })
  @Post('/addSkills')
  async createSkill(@Body() body:skillsDto){
    try{
      const response=await this.skillsService.addSkills(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('skills')
  @Get('/getSkills')
  async skillget(){
    try{
      const response=await this.skillsService.getSkills()
      return response
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('skills')
  @ApiBody({
    type: skillsDto
  })
  @Post('/skillById')
  async skillsbyId(@Body() body:skillsDto){
    try{
      const response=await this.skillsService.skillid(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }

  @ApiTags('skills')
  @ApiBody({
    type: skillsDto
  })
  @Post('/deleteSkills')
  async delSkills(@Body() body:skillsDto){
    try{
      const result=await this.skillsService.delSkills(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('skills')
  @ApiBody({
    type: skillsDto
  })
  @Post('/updateSkills')
  async updateSkills(@Body() body:skillsDto){
    try{
      const result=await this.skillsService.editSkills(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
