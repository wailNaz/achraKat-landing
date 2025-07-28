import { supabase } from "@/lib/supabase/config/supabase";
import { Review, normalizeReview } from "@/types/reviewType";
import { TABLES } from "./config/tables";

export async function getAllReviews(): Promise<Review[]> {
  const { data, error } = await supabase.from(TABLES.REVIEWS).select("*");
  if (error || !data) return [];
  return data.map((r) => normalizeReview(r));
}

export async function getReviewById(reviewId: string): Promise<Review | null> {
  const { data, error } = await supabase
    .from(TABLES.REVIEWS)
    .select("*")
    .eq("id", reviewId)
    .single();

  if (error || !data) return null;
  return normalizeReview(data);
}

export async function getReviewsByProductId(productId: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from(TABLES.REVIEWS)
    .select("*")
    .eq("product_id", productId);

  if (error || !data) return [];
  return data.map((r) => normalizeReview(r));
}

export async function getReviewsByCustomerId(customerId: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from(TABLES.REVIEWS)
    .select("*")
    .eq("customer_id", customerId);

  if (error || !data) return [];
  return data.map((r) => normalizeReview(r));
}

export async function deleteReview(reviewId: string): Promise<void> {
  const { error } = await supabase
    .from(TABLES.REVIEWS)
    .delete()
    .eq("id", reviewId);

  if (error) throw error;
}
