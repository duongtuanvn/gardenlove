/**
 * GraphQL Types for WooCommerce
 */

// Product types
export interface WooImage {
  sourceUrl: string;
  altText?: string;
}

export interface ProductCategory {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  count?: number;
  image?: WooImage;
}

export interface ProductAttribute {
  name: string;
  value: string;
}

export interface ProductVariation {
  id: string;
  databaseId: number;
  name: string;
  price: string;
  regularPrice: string;
  salePrice: string;
  stockStatus: 'IN_STOCK' | 'OUT_OF_STOCK' | 'ON_BACKORDER';
  stockQuantity?: number;
  image?: WooImage;
  attributes: {
    nodes: ProductAttribute[];
  };
}

export interface WooProduct {
  id: string;
  databaseId: number;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  averageRating: number;
  reviewCount: number;
  onSale: boolean;
  stockStatus: 'IN_STOCK' | 'OUT_OF_STOCK' | 'ON_BACKORDER';
  stockQuantity?: number;
  image: WooImage;
  galleryImages?: {
    nodes: WooImage[];
  };
  price: string;
  regularPrice: string;
  salePrice: string;
  productCategories: {
    nodes: ProductCategory[];
  };
  attributes?: {
    nodes: {
      name: string;
      options: string[];
      variation: boolean;
    }[];
  };
  variations?: {
    nodes: ProductVariation[];
  };
  related?: {
    nodes: WooProduct[];
  };
}

// Cart types
export interface CartItem {
  key: string;
  quantity: number;
  total: string;
  subtotal: string;
  product: {
    node: WooProduct;
  };
  variation?: {
    node: ProductVariation;
  };
}

export interface AppliedCoupon {
  code: string;
  discountAmount: string;
}

export interface WooCart {
  contents: {
    itemCount: number;
    nodes: CartItem[];
  };
  subtotal: string;
  total: string;
  shippingTotal: string;
  discountTotal: string;
  appliedCoupons: AppliedCoupon[];
}

// Response types
export interface GetProductsResponse {
  products: {
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
    nodes: WooProduct[];
  };
}

export interface GetProductResponse {
  product: WooProduct;
}

export interface GetCategoriesResponse {
  productCategories: {
    nodes: ProductCategory[];
  };
}

export interface GetCartResponse {
  cart: WooCart;
}

export interface AddToCartResponse {
  addToCart: {
    cart: WooCart;
  };
}

export interface UpdateCartResponse {
  updateItemQuantities: {
    cart: WooCart;
  };
}

export interface RemoveCartItemResponse {
  removeItemsFromCart: {
    cart: WooCart;
  };
}
