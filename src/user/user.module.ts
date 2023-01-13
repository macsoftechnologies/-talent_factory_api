import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, userSchema } from './dto/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:userSchema}])],
  controllers: [UserController],
  providers: [UserService, AuthService, JwtService,SharedService]
})
export class UserModule {}
 