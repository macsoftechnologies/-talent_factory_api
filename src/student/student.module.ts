import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { student, studentSchema } from './dto/student.schema';
import { SharedService } from 'src/shared/shared.service';
 
@Module({
  imports:[MongooseModule.forFeature([{name:student.name,schema:studentSchema}])],
  controllers: [StudentController],
  providers: [StudentService,SharedService]
})
export class StudentModule {}
