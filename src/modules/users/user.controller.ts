import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { User as UserEntity } from './user.entity';

import { UserDto } from './dto/user.dto';

@Controller('user')
export class userController{
  constructor(private readonly usersService: UsersService) { }
  
  async create(@Body() post: UserDto, @Request() req): Promise<UserEntity> {
    return await this.usersService.create(post);
  }
  
}