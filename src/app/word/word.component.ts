import { Component, Input } from '@angular/core';

export interface Word {
  id: number;
  newWord: string;
  translation: string;
  example: string;
  photo: string;
}

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.less'],
})
export class WordComponent {

  @Input() word!: Word;

}
