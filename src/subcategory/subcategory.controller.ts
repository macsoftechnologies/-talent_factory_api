import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { subcategoryDto } from './dto/subcategory.dto';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private readonly subcategoryService: SubcategoryService) {}


  @Post('/createsubcategory')
  async createSubcategory(@Body() body:subcategoryDto,@Res() Response){
    try{
      let response=await this.subcategoryService.createsubcategory(body)
      return Response.status(response.statusCode).send(response)
    }catch(error){
      return Response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        statuscode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error.message
      })
    }
  }
}
