import { writeFile, readFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id];
  }

  async getAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages;
  }

  async create(content: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    const randId = Math.floor(Math.random() * 99999);

    messages[randId] = {
      id: randId,
      content,
    };

    await writeFile('messages.json', JSON.stringify(messages));
    return randId;
  }
}
