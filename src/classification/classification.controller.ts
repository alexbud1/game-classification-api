import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { GameCategoryClassificationDto } from './dto/game_category_classification.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('classification')
@Controller('classification')
export class ClassificationController {
  @Post()
  @ApiOkResponse({
    description: 'The category of the game',
    type: GameCategoryClassificationDto,
  })
  @HttpCode(200)
  classify(
    @Body() gameCategoryClassificationDto: GameCategoryClassificationDto,
  ): { category: string } {
    const description: { category: string } = {
      category: gameCategoryClassificationDto.description,
    };
    return description;
  }
}
