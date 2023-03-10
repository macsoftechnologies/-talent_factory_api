import { Module } from '@nestjs/common';
import { LearningOrgService } from './learning-org.service';
import { LearningOrgController } from './learning-org.controller';
import { learningOrg, learningOrgSchema } from './dto/learningOrg.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:learningOrg.name,schema:learningOrgSchema}])],
  controllers: [LearningOrgController],
  providers: [LearningOrgService]
})
export class LearningOrgModule {}
