import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { skills, skillsSchema } from './schema/skills.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:skills.name,schema:skillsSchema}])],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
