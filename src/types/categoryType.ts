export type Category = {
  id: string;
  subCategoriesIds: string[];
  imageUrl: string;
  nameAr: string;
  nameEn: string;
  nameFr: string;
  created_at: string;
};

export type Subcategory = {
  id: string;
  imageUrl: string;
  nameAr: string;
  nameEn: string;
  nameFr: string;
  created_at: string;
  categoryId: string;
};

export type CategoryWithSubcategories = Category & {
  subcategories: Subcategory[];
};

export const emptyCategory: Category = {
  id: '',
  subCategoriesIds: [],
  imageUrl: '',
  nameAr: '',
  nameEn: '',
  nameFr: '',
  created_at: '',
};

export const emptySubcategory: Subcategory = {
  id: '',
  imageUrl: '',
  nameAr: '',
  nameEn: '',
  nameFr: '',
  created_at: '',
  categoryId: '',
};