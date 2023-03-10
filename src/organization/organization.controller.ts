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

  @Post('/login')
  async login(@Body() req:organizationDto) {
    try {
      const result = await this.organizationService.Login(req);
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
}
