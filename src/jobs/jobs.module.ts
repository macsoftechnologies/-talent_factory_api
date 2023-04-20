import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { job, jobSchema } from './dto/job.schema';
import { organizationSchema ,organization} from 'src/organization/dto/organization.schema';
 
@Module({
  imports:[MongooseModule.forFeature([{name:job.name,schema:jobSchema},{name:organization.name,schema:organizationSchema}])],
  controllers: [JobsController],
  providers: [JobsService]
})
export class JobsModule {}
