import { Path } from 'enum.types';

export const getPath = (name: string) =>
  `${Path.category}/${name
    .replace(/ /g, '-')
    .replace(/\(|\)/g, '')
    .toLowerCase()}`;
