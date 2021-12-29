import { Test, TestingModule } from '@nestjs/testing';
import { Listing.RepoService } from './listing.repo';

describe('Listing.RepoService', () => {
  let service: Listing.RepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Listing.RepoService],
    }).compile();

    service = module.get<Listing.RepoService>(Listing.RepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
