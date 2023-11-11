import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { GameCategoryClassificationDto } from './dto/game_category_classification.dto';
import { ApiOkResponse, ApiTags, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('classification')
@Controller('classification')
export class ClassificationController {
  @Post()
  @ApiOkResponse({
    description: 'The category of the game',
    content: {
      'application/json': {
        schema: {
          example: {
            category: 'action',
          },
          properties: {
            category: {
              type: 'string',
              description: 'The category',
            },
          },
        },
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'The description is not provided or is invalid',
    content: {
      'application/json': {
        schema: {
          example: {
            message: [
              'description must be a string',
              'description should not be empty',
            ],
            error: 'Bad Request',
            statusCode: 400,
          },
          properties: {
            message: {
              type: 'array',
              description: 'The error messages',
              items: {
                type: 'string',
              },
            },
            error: {
              type: 'string',
              description: 'The error name',
            },
            statusCode: {
              type: 'number',
              description: 'The status code',
            },
          },
        },
      },
    },
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
