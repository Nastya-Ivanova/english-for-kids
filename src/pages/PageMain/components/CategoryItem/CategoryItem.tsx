import { Link } from 'react-router-dom';
import { getPath } from 'shared/utils/getPath';
import { CategoryProps } from './CategoryItem.types';
import './CategoryItem.style.scss';

export const CategoryItem: React.FC<CategoryProps> = ({ category }) => (
  <Link to={getPath(category.name)} className="category-list__link">
    <img className="category-list__img" src={category.img} alt="" />
    {category.name}
  </Link>
);
