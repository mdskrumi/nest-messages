import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable({})
export class MessagesService {
  constructor(public messagesRepository: MessagesRepository) {}

  async findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  async getAll() {
    return this.messagesRepository.getAll();
  }

  async create(content: string) {
    return this.messagesRepository.create(content);
  }
}
