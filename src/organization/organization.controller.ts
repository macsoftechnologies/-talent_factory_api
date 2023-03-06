import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { organizationDto } from './dto/organization.dto';
import { OrganizationService } from './organization.service';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

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
}
