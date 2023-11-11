import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GameCategoryClassificationDto {
  @ApiProperty({
    description: 'The description of the game',
    type: String,
    example:
      "The Elder Scrolls V: Skyrim is a fantasy action role-playing game, playable from either a first- or third-person perspective. The player may freely roam over the land of Skyrim, an open world environment consisting of wilderness expanses, dungeons, caves, cities, towns, fortresses, and villages.[1] Players may navigate the game world more quickly by riding horses, paying for a ride from a city's stable, or utilizing a fast-travel system that allows them to move their character immediately to a previously discovered location.",
  })
  @IsString()
  @IsNotEmpty()
  description: string;
}
