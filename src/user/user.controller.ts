import { Body, Controller, HttpStatus, Param, Post, Res, SetMetadata, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt_auth.guard';
import {  RolesGuard } from 'src/auth/roles/roles.guard';
import {  AdminDto, loginDto, userDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController { 
  constructor(private readonly userService: UserService) {}

  
  @Post('createAdmin')
  async createAdmin(@Body() body:AdminDto,@Res()  Response){
    try{
       const  response=await this.userService.create({
           role:'admin',
           ...body
       })
     return Response.status(response.statusCode).send(response)
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }

  @Post('createsuperAdmin')
  async createsuperAdmin(@Body() body:AdminDto,@Res() Response){
    try{
      let response=await this.userService.create({
        role:'Super-admin',
        ...body
      })
      return Response(response.statusCode).send(response)
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error
      }
    }
  }

  @Post('/createLogin')
  async Login(@Body()params:loginDto){
    try{
      const response=await this.userService.login(params)
      return response

    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @Post('/createEmployer')
  async createEmploye(@Body() body:userDto,@Res() Response){
    try{
      let responses=await this.userService.create({
         role:'employer',
         ...body
      }) 
      return Response(responses.statusCode).send(responses)
       
    }catch(error){
      return{
      statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
      message:error 
      }
    }
  }
  


  // @Post('/createEmployer')
  // async createEmploy(@Body() body:userDto,@Res() Response){
  //   try{
  //     const response=await this.userService.create({
  //       role:'employer',
  //       ...body
  //     })
  //     return Response(response.statusCode).send(response)
  //   }catch(error){
  //     return {
  //       statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
  //       message:error
  //     }
  //   }
  // }
  // @ApiTags('User')
   @UseGuards(RolesGuard)
   @UseGuards(JwtAuthGuard)
   @SetMetadata('roles', ['super-admin', 'admin'])
   @ApiBearerAuth('JWT')
  @Post('/createcandidate')
  async createCandidate(@Body() body:userDto,@Res() res){
    try{
      const response=await this.userService.create({
        role:'candidate',
        ...body
      })
      //return res.status(200).send(response)
      return res.status(response.statusCode).send(response)
    }catch(error){
      return{
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        messageL:error
      }
    }
  }


  }
