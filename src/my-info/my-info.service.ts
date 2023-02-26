import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMyInfoDto } from './dto/create-my-info.dto';
import { UpdateMyInfoDto } from './dto/update-my-info.dto';
import { MyInfo } from './entities/my-info.entities';

@Injectable()
export class MyInfoService {
  constructor(
    @InjectRepository(MyInfo)
    private readonly myInfoRepo: Repository<MyInfo>,
  ) {}

  async createMyInfo(createMyInfoDto: CreateMyInfoDto) {
    const myInfo = this.myInfoRepo.create({
      ...createMyInfoDto,
    });
    return this.myInfoRepo.save(myInfo);
  }
  async updateMyInfo(id: string, updateMyInfoDto: UpdateMyInfoDto) {
    const myInfo = await this.myInfoRepo.preload({
      id: +id,
      ...updateMyInfoDto,
    });
    if (!myInfo) throw new NotFoundException(`Could not find MyInfo of id ${id}`);
    return this.myInfoRepo.save(myInfo);
  }

  findAllMyInfo() {
    return this.myInfoRepo.find();
  }

  async findOneMyInfo(id: string) {
    const myInfo = await this.myInfoRepo.findOne(id);
    if (!myInfo) throw new NotFoundException(`Could not find MyInfo of id ${id}`);
    return myInfo;
  }

  async removeOneMyInfo(id: string) {
    const myInfo = await this.findOneMyInfo(id);
    return this.myInfoRepo.remove(myInfo);
  }
}
