import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GameCategoryClassificationDto {
  @ApiProperty({
    description: 'The description of the game',
    type: String,
    example: 'MMORPG',
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
