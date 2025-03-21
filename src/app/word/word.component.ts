import { Component, Input } from '@angular/core';
import { Word } from '../word';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.less'],
})
export class WordComponent {

  @Input() word!: Word;

}
