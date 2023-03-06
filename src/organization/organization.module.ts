import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { organization, organizationSchema } from './dto/organization.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:organization.name,schema:organizationSchema}])],
  controllers: [OrganizationController],
  providers: [OrganizationService]
})
export class OrganizationModule {}
