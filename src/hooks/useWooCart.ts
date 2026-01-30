/**
 * React Query hooks for WooCommerce Cart
 */

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAuthenticatedClient } from '@/lib/graphql/client';
import {
  GET_CART,
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_CART_ITEM,
  APPLY_COUPON,
  REMOVE_COUPON,
  CLEAR_CART,
} from '@/lib/graphql/queries/cart';
import type {
  GetCartResponse,
  AddToCartResponse,
  UpdateCartResponse,
  RemoveCartItemResponse,
  WooCart,
} from '@/lib/graphql/types';
import { toast } from 'sonner';

// Fetch cart
export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const client = getAuthenticatedClient();
      const data = await client.request<GetCartResponse>(GET_CART);
      return data.cart;
    },
    staleTime: 0, // Always refetch cart
    refetchOnWindowFocus: true,
  });
};

// Add to cart mutation
export const useAddToCart = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({
      productId,
      quantity = 1,
      variationId,
    }: {
      productId: number;
      quantity?: number;
      variationId?: number;
    }) => {
      const client = getAuthenticatedClient();
      const data = await client.request<AddToCartResponse>(ADD_TO_CART, {
        productId,
        quantity,
        variationId,
      });
      return data.addToCart.cart;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData(['cart'], cart);
      toast.success('Added to cart!');
    },
    onError: (error) => {
      console.error('Add to cart error:', error);
      toast.error('Failed to add to cart');
    },
  });
};

// Update cart item mutation
export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ key, quantity }: { key: string; quantity: number }) => {
      const client = getAuthenticatedClient();
      const data = await client.request<UpdateCartResponse>(UPDATE_CART_ITEM, {
        key,
        quantity,
      });
      return data.updateItemQuantities.cart;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData(['cart'], cart);
    },
    onError: (error) => {
      console.error('Update cart error:', error);
      toast.error('Failed to update cart');
    },
  });
};

// Remove cart item mutation
export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (keys: string[]) => {
      const client = getAuthenticatedClient();
      const data = await client.request<RemoveCartItemResponse>(REMOVE_CART_ITEM, {
        keys,
      });
      return data.removeItemsFromCart.cart;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData(['cart'], cart);
      toast.success('Item removed from cart');
    },
    onError: (error) => {
      console.error('Remove cart item error:', error);
      toast.error('Failed to remove item');
    },
  });
};

// Apply coupon mutation
export const useApplyCoupon = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (code: string) => {
      const client = getAuthenticatedClient();
      const data = await client.request<{ applyCoupon: { cart: WooCart } }>(APPLY_COUPON, {
        code,
      });
      return data.applyCoupon.cart;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData(['cart'], cart);
      toast.success('Coupon applied!');
    },
    onError: (error) => {
      console.error('Apply coupon error:', error);
      toast.error('Invalid coupon code');
    },
  });
};

// Remove coupon mutation
export const useRemoveCoupon = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (code: string) => {
      const client = getAuthenticatedClient();
      const data = await client.request<{ removeCoupons: { cart: WooCart } }>(REMOVE_COUPON, {
        code,
      });
      return data.removeCoupons.cart;
    },
    onSuccess: (cart) => {
      queryClient.setQueryData(['cart'], cart);
      toast.success('Coupon removed');
    },
    onError: (error) => {
      console.error('Remove coupon error:', error);
      toast.error('Failed to remove coupon');
    },
  });
};

// Clear cart mutation
export const useClearCart = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async () => {
      const client = getAuthenticatedClient();
      await client.request(CLEAR_CART);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Cart cleared');
    },
    onError: (error) => {
      console.error('Clear cart error:', error);
      toast.error('Failed to clear cart');
    },
  });
};
