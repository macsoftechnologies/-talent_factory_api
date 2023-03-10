import { Test, TestingModule } from '@nestjs/testing';
import { LearningOrgService } from './learning-org.service';

describe('LearningOrgService', () => {
  let service: LearningOrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LearningOrgService],
    }).compile();

    service = module.get<LearningOrgService>(LearningOrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
