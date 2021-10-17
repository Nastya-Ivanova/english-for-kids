import { dance } from 'asset/action-set-A';
import { swim } from 'asset/action-set-B';
import { drop } from 'asset/action-set-C';
import { friendly } from 'asset/adjective';
import { cat } from 'asset/animal-set-A';
import { bird } from 'asset/animal-set-B';
import { blouse } from 'asset/clothes';
import { smile } from 'asset/emotion';

export const categories = [
  {
    img: dance,
    name: 'Action (set A)',
  },
  {
    img: swim,
    name: 'Action (set B)',
  },
  {
    img: drop,
    name: 'Action (set C)',
  },
  {
    img: friendly,
    name: 'Adjective',
  },
  {
    img: cat,
    name: 'Animal (set A)',
  },
  {
    img: bird,
    name: 'Animal (set B)',
  },
  {
    img: blouse,
    name: 'Clothes',
  },
  {
    img: smile,
    name: 'Emotion',
  },
];
