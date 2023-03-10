import { Test, TestingModule } from '@nestjs/testing';
import { LearningOrgController } from './learning-org.controller';
import { LearningOrgService } from './learning-org.service';

describe('LearningOrgController', () => {
  let controller: LearningOrgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LearningOrgController],
      providers: [LearningOrgService],
    }).compile();

    controller = module.get<LearningOrgController>(LearningOrgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
