import { Body, Controller, Get, HttpStatus, Post, SetMetadata, UseGuards } from '@nestjs/common';
import { organizationDto } from './dto/organization.dto';
import { OrganizationService } from './organization.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
 

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}


  @ApiTags('organization')
  @ApiBody({
    type: organizationDto,
  })
  @Post('/createOrganization')
  async  addOrg(@Body() body:organizationDto){
    try{
      const resp=await this.organizationService.addOrganization(body)
       return resp
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('organization')
  @ApiBody({
    type: organizationDto,
  })
  @Post('/login')
  async login(@Body() req:organizationDto) {
    try {
      const result = await this.organizationService.Login(req);
      return result
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        msg: error,
      };
    }
  }
  
  @ApiTags('organization')
  @Get('/getOrganization')
  async getOrg(){
    try{
      const result=await this.organizationService.getOrg()
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }


  @ApiTags('organization')
  @ApiBody({
    type: organizationDto,
  })
  @Post('/deleteOrganization')
  async removeOrg(@Body()  body:organizationDto){
    try{
      const  result=await this.organizationService.deleteOrg(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }


  @ApiTags('organization')
  @ApiBody({
    type: organizationDto,
  })
  @Post('/updateOrganzation')
  async updateOrg(@Body()  body:organizationDto){
    try{
      const response=await this.organizationService.editOrg(body)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('organization')
  @ApiBody({
    type: organizationDto,
  })
  @Post('/getOrganizationById')
  async getOrganization(@Body() body:organizationDto){
    try{
      const result=await this.organizationService.getOrgId(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
