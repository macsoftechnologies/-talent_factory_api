import { Body, Controller, Get, HttpStatus, Param, Post,Query } from '@nestjs/common';
import { jobDto } from './dto/job.dto';
import { JobsService } from './jobs.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
 

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @ApiTags('jobs')
  @ApiBody({
    type: jobDto,
  })
  @Post('/addJobs')
  async addJob(@Body() body:jobDto){
    try{
      const  result =await this.jobsService.createJob(body)
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('jobs')
  @Get('/getJobs')
  async jobsGet(){
    try{
      const result=await this.jobsService.get()
      return result
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }

  @ApiTags('jobs')
  @ApiBody({
    type: jobDto,
  })
  @Get('/search')
  async Search(@Query('query') query:string){
    try{
      const response=await this.jobsService.search(query)
      return response
    }catch(error){
      return {
        statusCode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error 
      }
    }
  }
}
