import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(@Req() request) {
    return request.user;
  }

  @Post()
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @Post('login')
  logIn(@Req() request) {
    return request.user;
  }

  @Post('logout')
  logOut(@Req() request, @Res() response) {
    request.logOut();
    response.clearCookie('connect.sid', { httpOnly: true });
    response.send('OK');
  }
}
