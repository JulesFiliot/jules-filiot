import { Test, TestingModule } from '@nestjs/testing';
import { MyInfoController } from './myinfo.controller';

describe('MyInfoController', () => {
  let controller: MyInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyInfoController],
    }).compile();

    controller = module.get<MyInfoController>(MyInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
