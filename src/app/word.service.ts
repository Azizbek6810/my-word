import { Injectable } from '@angular/core';
import { Word } from './word';

@Injectable()
export class WordService {
      /**
   *
   */
  words: Word[] = [
    {
      id: 1,
      newWord: 'Cat',
      translation: 'Mushuk',
      example: 'I love my cat',
      photo: '../assets/cat.jpg',
    },
    {
      id: 2,
      newWord: 'Banana',
      translation: 'Banan',
      example: 'I eat banana every day',
      photo: '../assets/banana.jpg',
    },
    {
      id: 3,
      newWord: 'Apple',
      translation: 'Olma',
      example: 'I use apple',
      photo: '../assets/apple.jpg',
    },
    {
      id: 4,
      newWord: 'Nature',
      translation: 'Tabiat',
      example: 'I love watching nature',
      photo: '../assets/n1.jpg',
    },
    {
      id: 5,
      newWord: 'Nature',
      translation: 'Tabiat',
      example: 'I love watching nature',
      photo: '../assets/n2.jpg',
    },
    {
      id: 6,
      newWord: 'Nature',
      translation: 'Tabiat',
      example: 'I love watching nature',
      photo: '../assets/n3.jpg',
    },
    {
      id: 7,
      newWord: 'Nature',
      translation: 'Tabiat',
      example: 'I love watching nature',
      photo: '../assets/n4.jpg',
    },
    {
      id: 8,
      newWord: 'Nature',
      translation: 'Tabiat',
      example: 'I love watching nature',
      photo: '../assets/n5.jpg',
    },
    {
      id: 9,
      newWord: 'Nature',
      translation: 'Tabiat',
      example: 'I love watching nature',
      photo: '../assets/n6.jpg',
    },
  ];
}
