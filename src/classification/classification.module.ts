import { Module } from '@nestjs/common';
import { ClassificationController } from './classification.controller';

@Module({
  imports: [],
  controllers: [ClassificationController],
  providers: [],
})
export class ClassificationModule {}
