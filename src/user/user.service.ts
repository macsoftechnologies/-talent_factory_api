import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { SharedService } from 'src/shared/shared.service';
import {  AdminDto, GetUserDto, loginDto, userDto } from './dto/user.dto';
import { User } from './dto/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private UserModel:Model<User>,
    private authService:AuthService,private sharedService:SharedService){}

  async create(params:AdminDto | userDto):Promise<any>{
      try{
        const duplicateuserName=await this.UserModel.findOne({
          userName:params.userName,
          role:params.role  
        })
        if(duplicateuserName){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:'username is already exits',
                data:null
            }
        }

        const duplicateEmail=await this.UserModel.findOne({
            email:params.email,
            role:params.role
        })
        if(duplicateEmail){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:'email is already exits',
                 data:null
            }
        }

        const duplicatephNumber=await this.UserModel.findOne({
            mobileNumber:params.mobileNumber,
            role:params.role
        })
        if(duplicatephNumber){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:'phNumber already exits',
                data:'null'
 
            }
        }
        let createUserRes;
        if(params.role=='employer' || params.role=='candidate'){
            let filterObject:any={
                 ...params
            }
            createUserRes=await this.UserModel.create(filterObject);
          }else{
               createUserRes=await this.UserModel.create(params)
          }
          
        let response={
            statusCode:HttpStatus.OK,
            message:'user created Sucessfully',
            data:createUserRes
        }
        return response
      }catch(error){
          return{
              statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
              message:error

          }
      }
  }


  async login(params:loginDto){
    try{
      const user=await this.UserModel.findOne({
          userName:params.userName,
          role:params.role,

      })
      if(params.role=='employer'){
          const obj:any ={userstatus:'suspend'};

         await this.UserModel.updateOne(
             {
                 _id:user._id,
             },
             obj,
         )

      }
      if(!user){
          return {
              statusCode:HttpStatus.NOT_FOUND,
              message:'username not found'
          }
      }
      

      if(user.status=='suspend'){
          return {
              statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
              message:'your account got suspend please contact admin',
          }
      }
       const access_token:any=await this.authService.login(user)
       const user_Details:any=await this.UserModel.findOne({
           userName:params.userName,
           role:params.role,
           //email:params.email,
           password:params.password
       }).lean();
       user_Details.access_token =access_token.access_token
       return {
           statusCode:HttpStatus.OK, 
           message:'login sucesfully',
           data:{user_Details}
       }
    }catch(error){
        let error_response = {
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            data: null,
            message: error,
          };
          return error_response;
        }
    }


    async findOne(params:any):Promise<any>{
        try{
            const response=await this.UserModel.findOne(params)
            if(!response){
                return {
                    statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                    message:'user not registered',
                    data:null
                }
            }
            return{
                statusCode:HttpStatus.OK,
                message:'created sucessfully',
                data:response
            }
        }catch(error){
            return{
                statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
                message:error 
            }
              
        }
    }

   

    // async creates(params:AdminDto |userDto){
    //     try{
    //         let createRes;
    //         if(params.role=='employer'|| params.role=='candidate'){
    //             let filterObject:any={
    //                 ...params
    //             }
    //             createRes=await this.UserModel.create(filterObject)
    //         }else{
    //             createRes=await this.UserModel.create(params)
    //         }
    //         let response={
    //             statusCode:HttpStatus.OK,
    //             message:'user created Sucessfully',
    //             data:createRes
    //         }
    //         return response
    //     }catch(error){
    //         return{
    //             statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
    //             message:error
  
    //         }
    //     }
    // }


    
  
 }
