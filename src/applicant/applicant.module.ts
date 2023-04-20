import { Module } from '@nestjs/common';
import { ApplicantService } from './applicant.service';
import { ApplicantController } from './applicant.controller';
import { applicant, applicantSchema } from './dto/applicant.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:applicant.name,schema:applicantSchema}])],
  controllers: [ApplicantController],
  providers: [ApplicantService]
})
export class ApplicantModule {}
