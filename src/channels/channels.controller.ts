import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/channels')
export class ChannelsController {
  @Get(':name/chats')
  getAllChannels() {}

  @Post(':name/chats')
  createChannels() {}

  @Get(':name/chats')
  getSpecificChannel() {}

  @Get(':name/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':name/chats')
  postChat(@Body() body) {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
