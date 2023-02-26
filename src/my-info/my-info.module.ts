import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyInfo } from './entities/my-info.entities';
import { MyInfoController } from './my-info.controller';
import { MyInfoService } from './my-info.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MyInfo]),
  ],
  controllers: [MyInfoController],
  providers: [MyInfoService]
})
export class MyInfoModule {}
