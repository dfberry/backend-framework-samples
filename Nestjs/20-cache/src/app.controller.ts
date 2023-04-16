import { CacheInterceptor } from '@nestjs/cache-manager';
import { Controller, Get, Body, Post, UseInterceptors } from '@nestjs/common';
import { IsInt, IsString } from 'class-validator';

class CreateItemDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly name: string;
}

@Controller('items')
@UseInterceptors(CacheInterceptor)
export class AppController {

  data = [{ id: 1, name: 'Nest' }]

  @Get()
  findAll() {
    return this.data;
  }
  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    this.data.push(createItemDto);
  }
}
