import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordService } from '../word.service';
import { Word } from '../word';
import { FormControl, FormGroup } from '@angular/forms';

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

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    comment: new FormControl(''),
  });

  constructor(private route: ActivatedRoute, private wordService: WordService) {
    const wordId: string = this.route.snapshot.params['id'];
    this.wordService.getWordById(+wordId).then((word) => {
      this.oneWord = word;
    });
  }

  send() {
    this.wordService.sendData(this.form.value.name, this.form.value.comment);
  }
}
