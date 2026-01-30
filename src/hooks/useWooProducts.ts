/**
 * React Query hooks for WooCommerce Products
 */

import { useQuery } from '@tanstack/react-query';
import { getAuthenticatedClient } from '@/lib/graphql/client';
import { 
  GET_PRODUCTS, 
  GET_PRODUCT_BY_SLUG, 
  GET_PRODUCT_CATEGORIES,
  SEARCH_PRODUCTS 
} from '@/lib/graphql/queries/products';
import type { 
  GetProductsResponse, 
  GetProductResponse, 
  GetCategoriesResponse 
} from '@/lib/graphql/types';

// Fetch products
export const useProducts = (options?: {
  first?: number;
  after?: string;
  categorySlug?: string;
  onSale?: boolean;
  featured?: boolean;
}) => {
  return useQuery({
    queryKey: ['products', options],
    queryFn: async () => {
      const client = getAuthenticatedClient();
      const where: Record<string, unknown> = {};
      
      if (options?.categorySlug) {
        where.categoryIn = [options.categorySlug];
      }
      if (options?.onSale) {
        where.onSale = true;
      }
      if (options?.featured) {
        where.featured = true;
      }
      
      const data = await client.request<GetProductsResponse>(GET_PRODUCTS, {
        first: options?.first || 12,
        after: options?.after,
        where: Object.keys(where).length > 0 ? where : undefined,
      });
      
      return data.products;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Fetch single product by slug
export const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const client = getAuthenticatedClient();
      const data = await client.request<GetProductResponse>(GET_PRODUCT_BY_SLUG, {
        slug,
      });
      return data.product;
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
};

// Fetch product categories
export const useProductCategories = (first?: number) => {
  return useQuery({
    queryKey: ['productCategories', first],
    queryFn: async () => {
      const client = getAuthenticatedClient();
      const data = await client.request<GetCategoriesResponse>(GET_PRODUCT_CATEGORIES, {
        first: first || 20,
      });
      return data.productCategories.nodes;
    },
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

// Search products
export const useProductSearch = (search: string) => {
  return useQuery({
    queryKey: ['productSearch', search],
    queryFn: async () => {
      const client = getAuthenticatedClient();
      const data = await client.request<GetProductsResponse>(SEARCH_PRODUCTS, {
        search,
        first: 12,
      });
      return data.products.nodes;
    },
    enabled: search.length >= 2,
    staleTime: 2 * 60 * 1000,
  });
};
