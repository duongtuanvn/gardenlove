/**
 * Cart GraphQL Queries & Mutations
 */

import { gql } from 'graphql-request';

// Cart fragment for reuse
const CART_FRAGMENT = gql`
  fragment CartFields on Cart {
    contents {
      itemCount
      nodes {
        key
        quantity
        total
        subtotal
        product {
          node {
            ... on SimpleProduct {
              id
              databaseId
              name
              slug
              image {
                sourceUrl
              }
              price
              stockStatus
            }
            ... on VariableProduct {
              id
              databaseId
              name
              slug
              image {
                sourceUrl
              }
              price
              stockStatus
            }
          }
        }
        variation {
          node {
            id
            databaseId
            name
            price
            image {
              sourceUrl
            }
            attributes {
              nodes {
                name
                value
              }
            }
          }
        }
      }
    }
    subtotal
    total
    shippingTotal
    discountTotal
    appliedCoupons {
      code
      discountAmount
    }
  }
`;

// Get cart
export const GET_CART = gql`
  ${CART_FRAGMENT}
  query GetCart {
    cart {
      ...CartFields
    }
  }
`;

// Add to cart
export const ADD_TO_CART = gql`
  ${CART_FRAGMENT}
  mutation AddToCart($productId: Int!, $quantity: Int = 1, $variationId: Int) {
    addToCart(input: { productId: $productId, quantity: $quantity, variationId: $variationId }) {
      cart {
        ...CartFields
      }
    }
  }
`;

// Update cart item quantity
export const UPDATE_CART_ITEM = gql`
  ${CART_FRAGMENT}
  mutation UpdateCartItem($key: ID!, $quantity: Int!) {
    updateItemQuantities(input: { items: [{ key: $key, quantity: $quantity }] }) {
      cart {
        ...CartFields
      }
    }
  }
`;

// Remove cart item
export const REMOVE_CART_ITEM = gql`
  ${CART_FRAGMENT}
  mutation RemoveCartItem($keys: [ID!]!) {
    removeItemsFromCart(input: { keys: $keys }) {
      cart {
        ...CartFields
      }
    }
  }
`;

// Apply coupon
export const APPLY_COUPON = gql`
  ${CART_FRAGMENT}
  mutation ApplyCoupon($code: String!) {
    applyCoupon(input: { code: $code }) {
      cart {
        ...CartFields
      }
    }
  }
`;

// Remove coupon
export const REMOVE_COUPON = gql`
  ${CART_FRAGMENT}
  mutation RemoveCoupon($code: String!) {
    removeCoupons(input: { codes: [$code] }) {
      cart {
        ...CartFields
      }
    }
  }
`;

// Clear cart
export const CLEAR_CART = gql`
  mutation ClearCart {
    emptyCart(input: { clearPersistentCart: true }) {
      cart {
        contents {
          itemCount
        }
      }
    }
  }
`;
