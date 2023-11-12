import { GameCategoryClassificationDto } from './game_category_classification.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { ValidationError } from 'class-validator';

// Helper function to stringify errors
export function stringified(errors: ValidationError[]): string {
  return JSON.stringify(errors);
}

// Basic Test Suite for GameCategoryClassificationDto
describe('GameCategoryClassificationDto', () => {
  // Test 1
  it('should only accept strings for description', async () => {
    const importInfo = { description: 4567 };
    const ofImportDto = plainToInstance(
      GameCategoryClassificationDto,
      importInfo,
    );
    const errors = await validate(ofImportDto);
    expect(errors.length).not.toBe(0);
    expect(stringified(errors)).toContain(`description must be a string`);
  });

  // Test 2
  it('should not allow an empty description', async () => {
    const importInfo = { description: '' };
    const ofImportDto = plainToInstance(
      GameCategoryClassificationDto,
      importInfo,
    );
    const errors = await validate(ofImportDto);
    expect(errors.length).not.toBe(0);
    expect(stringified(errors)).toContain(`description should not be empty`);
  });

  // Test3
  it('should have a valid example', () => {
    const dto = new GameCategoryClassificationDto();
    dto.description = 'Your game description goes here';
    expect(dto.description).toBeDefined();
    expect(dto.description).toEqual(expect.any(String)); // Assuming it should be a string
  });
});
