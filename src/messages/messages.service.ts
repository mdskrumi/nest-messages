import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;
  constructor() {
    this.messagesRepository = new MessagesRepository();
  }

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
