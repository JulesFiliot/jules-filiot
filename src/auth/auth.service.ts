import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtTokenService: JwtService,
  ){}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneUserByName(username);

    if (user && user.password === password) {
      delete user['password'];
      return user;
    }

    return null;
  }

  async loginWithCredentials(user: any) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}