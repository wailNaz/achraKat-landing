import { Category, CategoryWithSubcategories, Subcategory } from '@/types/categoryType';
import { supabase } from './config/supabase';
import { TABLES } from "./config/tables";

// CATEGORY OPERATIONS

export async function getAllCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from(TABLES.CATEGORIES)
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}

export async function getCategoryById(categoryId: string): Promise<Category | null> {
  const { data, error } = await supabase
    .from(TABLES.CATEGORIES)
    .select('*')
    .eq('id', categoryId)
    .single();

  if (error) {
    console.error('Error fetching category:', error);
    return null;
  }

  return data;
}

export async function createCategory(category: Omit<Category, 'id' | 'created_at'>): Promise<Category | null> {
  const { data, error } = await supabase
    .from(TABLES.CATEGORIES)
    .insert(category)
    .select()
    .single();

  if (error) {
    console.error('Error creating category:', error);
    return null;
  }

  return data;
}

export async function updateCategory(
  categoryId: string,
  updates: Partial<Omit<Category, 'id' | 'created_at'>>
): Promise<Category | null> {
  const { data, error } = await supabase
    .from(TABLES.CATEGORIES)
    .update(updates)
    .eq('id', categoryId)
    .select()
    .single();

  if (error) {
    console.error('Error updating category:', error);
    return null;
  }

  return data;
}

// SUBCATEGORY OPERATIONS

export async function getSubcategoriesByCategory(categoryId: string): Promise<Subcategory[]> {
  const { data, error } = await supabase
    .from(TABLES.SUBCATEGORIES)
    .select('*')
    .eq('categoryId', categoryId)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching subcategories:', error);
    return [];
  }

  return data || [];
}

export async function getCategoryWithSubcategories(categoryId: string): Promise<CategoryWithSubcategories | null> {
  const category = await getCategoryById(categoryId);
  if (!category) return null;

  const subcategories = await getSubcategoriesByCategory(categoryId);
  return { ...category, subcategories };
}

export async function createSubcategory(
  subcategory: Omit<Subcategory, 'id' | 'created_at'>
): Promise<Subcategory | null> {
  const { data, error } = await supabase
    .from(TABLES.SUBCATEGORIES)
    .insert({
      imageUrl: subcategory.imageUrl,
      nameEn: subcategory.nameEn,
      nameAr: subcategory.nameAr,
      nameFr: subcategory.nameFr,
      categoryId: subcategory.categoryId
    })
    .select()
    .single();

  if (error) {
    console.error('Subcategory creation failed:', error);
    return null;
  }
  const { error: updateError } = await supabase
    .from(TABLES.CATEGORIES)
    .update({
      subCategoriesIds: [...(data.subCategoriesIds || []), data.id]
    })
    .eq('id', subcategory.categoryId);

  if (updateError) {
    console.error('Parent update failed:', updateError);
    return null;
  }

  return data;
}

export async function updateSubcategory(
  subcategoryId: string,
  updates: Partial<Omit<Subcategory, 'id' | 'created_at'>>
): Promise<Subcategory | null> {
  const { data, error } = await supabase
    .from(TABLES.SUBCATEGORIES)
    .update(updates)
    .eq('id', subcategoryId)
    .select()
    .single();

  if (error) {
    console.error('Error updating subcategory:', error);
    return null;
  }

  return data;
}