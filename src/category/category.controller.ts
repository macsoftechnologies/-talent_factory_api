import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { CategoryService } from './category.service';
import { categoryDto } from './dto/category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/createCategory') 
  async createcategory(@Body() body:categoryDto,@Res() Response){
    try{
      let response =await this.categoryService.createCategory(body)
      return Response.status(response.statusCode).send(response)
    }catch(error){
      return Response.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
        statuscode:HttpStatus.INTERNAL_SERVER_ERROR,
        message:error.message
      })
    }
}

}