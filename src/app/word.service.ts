import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable()
export class WordService {
  url = 'http://localhost:3000/words';

  async getAllWords(): Promise<Word[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getWordById(id: number) {
    const word = await fetch(`${this.url}/${id}`);
    return (await word.json()) ?? [];
  }

  sendData(fio: string, comment: string) {
    alert(`${fio}: ${comment}`);
  }
}
