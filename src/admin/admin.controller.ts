import { Body, Controller, HttpStatus, Post, Res, Response } from '@nestjs/common';
import { AdminService } from './admin.service';
import { adminDto } from './dto/admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  @Post('/createAdmin')
  async createAdmin(@Res() Response) {
    try {
      let superAdmin = {
        email:'admin@gmail.com',
        password:'admin12!@'
      };

      let response = await this.adminService.create(superAdmin);

      return Response.status(response.statusCode).send(response);
    } catch (error) {
      return Response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        errorMessage: error.message,
      });
    }
  }


  
  
  @Post('/login')
  async login(@Body() req:adminDto) {
    try {
      const result = await this.adminService.Login(req);
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
