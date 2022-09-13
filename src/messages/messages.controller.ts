import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message-dto';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages() {
    return this.messagesService.getAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get(':id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    console.log(message);

    if (!message) throw new NotFoundException('Message is not found');

    return message;
  }
}
