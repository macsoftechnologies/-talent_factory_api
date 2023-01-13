import { Module } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';
import { SubcategoryController } from './subcategory.controller';
import { subcategory, subcategorySchema } from './dto/subcategory.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:subcategory.name,schema:subcategorySchema}])],
  controllers: [SubcategoryController],
  providers: [SubcategoryService]
})
export class SubcategoryModule {}
