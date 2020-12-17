interface Category {
  id: string;
  name: string;
  description: string;
  subCategories: Category[];
}

export default Category;
