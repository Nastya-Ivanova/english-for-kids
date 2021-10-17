import { CategoryItem } from '../CategoryItem';
import { categories } from './CategoryList.data';
import './CategoryList.style.scss';

export const CategoryList: React.FC = () => (
  <div className="category-list">
    {categories.map((category, index) => (
      <CategoryItem key={index} category={category} />
    ))}
  </div>
);
