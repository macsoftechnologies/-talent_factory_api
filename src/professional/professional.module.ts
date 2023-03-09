import { Module } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { ProfessionalController } from './professional.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { professional, professionalSchema } from './dto/professional.schema';
import { SharedService } from 'src/shared/shared.service';

@Module({
  imports:[MongooseModule.forFeature([{name:professional.name,schema:professionalSchema}])],
  controllers: [ProfessionalController],
  providers: [ProfessionalService,SharedService]
})
export class ProfessionalModule {}
