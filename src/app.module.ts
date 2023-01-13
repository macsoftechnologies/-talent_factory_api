import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedService } from './shared/shared.service';
import { CategoryModule } from './category/category.module';
import { SubcategoryModule } from './subcategory/subcategory.module';
 
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://ravi:VWTF2ENAbsIysux2@ravi.mkclc.mongodb.net/talenFactory?retryWrites=true&w=majority'),UserModule, AuthModule, CategoryModule, SubcategoryModule ],
  controllers: [AppController],
  providers: [AppService, SharedService],
})
export class AppModule {}
