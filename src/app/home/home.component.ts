import { Component } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  /**
   *
   */
  filteredWords!: Word[];

  constructor(private wordService: WordService) {
    this.filteredWords = wordService.words;
  }
  /**
   *
   * @param text
   */
  search(text: string) {
    this.filteredWords = this.wordService.words.filter((word) =>
      word.newWord.toLowerCase().includes(text.toLowerCase())
    );
  }
}
