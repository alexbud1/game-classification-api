import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationController } from './classification.controller';

// Basic Test Suite for ClassificationController
describe('ClassificationController', () => {
  let controller: ClassificationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassificationController],
    }).compile();

    controller = module.get<ClassificationController>(ClassificationController);
  });

  // Default test
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Test the classify method
  describe('classify', () => {
    // Test 1
    it('should return string for valid request', () => {
      const response = controller.classify({
        description: 'Your game description goes here',
      });

      expect(response).toMatchObject({
        category: expect.any(String), // Expects the category property to be a string
      });
    });
  });
});
