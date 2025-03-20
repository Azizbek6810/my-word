import { Component } from '@angular/core';
import { Word } from '../word';
import { WordService } from '../word.service';
import { Router } from '@angular/router';

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

  constructor(private wordService: WordService, private router: Router) {
    this.filteredWords = wordService.getAllWords();
  }
  /**
   *
   * @param text
   */
  search(text: string) {
    this.filteredWords = this.wordService
      .getAllWords()
      .filter((word) =>
        word.newWord.toLowerCase().includes(text.toLowerCase())
      );
  }

  navigateToDetails() {
   this.router.navigate(['details'])
  }
}
