import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MyInfo } from './entities/myinfo.entity';
import { MyInfoController } from './myinfo.controller';
import { MyInfoService } from './myinfo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MyInfo]),
  ],
  controllers: [MyInfoController],
  providers: [MyInfoService],
  exports: []
})
export class MyInfoModule {}
