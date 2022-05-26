import { Injectable, NotFoundException, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async findOneUser(id: string) {
    const user = await this.usersRepository.findOne(id);
    if (!user) throw new NotFoundException(`Could not find user of id ${id}`);

    delete user['password'];
    return user;
  };

  async findOneUserByName(username: string) {
    const user = await this.usersRepository.findOne({ username });
    if (!user) throw new NotFoundException(`Could not find user of username ${username}`);

    return user;
  };

  async createUser(createUsersDto: CreateUsersDto) {
    const isUsernameUsed = await this.isUsernameUsed(createUsersDto.username);
    if (isUsernameUsed) throw new NotAcceptableException(`The username '${createUsersDto.username}' is already in use`);
  
    const user = this.usersRepository.create(createUsersDto);
    const savedUser = await this.usersRepository.save(user);
    delete savedUser['password'];
    return savedUser;
  };

  async updateUser(id: string, updateUsersDto: UpdateUsersDto) {
    const user = await this.usersRepository.preload({
      id: +id,
      ...updateUsersDto,
    });
    if (!user) throw new NotFoundException(`Could not find user of id ${id}`);

    const savedUser = await this.usersRepository.save(user);
    delete savedUser['password'];
    return savedUser;
  };

  async removeUser(id: string) {
    const user = await this.findOneUser(id);
    if (!user) throw new NotFoundException(`Could not find user of id ${id}`);

    const removedUser = await this.usersRepository.remove(user);
    delete removedUser['password'];
    return removedUser;
  };

  async isUsernameUsed(username: string): Promise<boolean> {
    const existingUser = await this.usersRepository.findOne({ username });
    if (existingUser) {
      return true;
    }
    return false;
  };
}
