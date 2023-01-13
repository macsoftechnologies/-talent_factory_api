import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { category, categorySchema } from './dto/category.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:category.name,schema:categorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
