import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { UsersService } from './users.service';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiTags('users')
  @Post()
  createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.createUser(createUsersDto);
  }

  @ApiTags('users')
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto) {
    return this.usersService.updateUser(id, updateUsersDto);
  }

  @ApiTags('users')
  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOneUser(id);
  }

  @ApiTags('users')
  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(id);
  }
}
