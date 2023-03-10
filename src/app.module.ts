import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JobsModule } from './jobs/jobs.module';
import { ProfessionalModule } from './professional/professional.module';
import { StudentModule } from './student/student.module';
import { OrganizationModule } from './organization/organization.module';
import { SharedService } from './shared/shared.service';
import { AdminModule } from './admin/admin.module';
import { LearningOrgModule } from './learning-org/learning-org.module';
 
 
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://macsof:macsof@nextlevelcarwash.yjs3i.mongodb.net/TalentFactory?retryWrites=true&w=majority'), JobsModule, ProfessionalModule, StudentModule, OrganizationModule, AdminModule, LearningOrgModule],
  controllers: [AppController],
  providers: [AppService, SharedService],
})
export class AppModule {}
