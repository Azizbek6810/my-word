import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';
import { Word } from '../word';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less'],
})
export class DetailsComponent {

  oneWord?: Word;
  /**
   *
   */
  constructor(private route: ActivatedRoute, private wordService: WordService) {
    const wordId: string = this.route.snapshot.params['id'];
   this.oneWord = this.wordService.getWordById(+wordId);
  }
}
