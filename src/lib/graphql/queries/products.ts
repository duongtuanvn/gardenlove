/**
 * Product GraphQL Queries
 */

import { gql } from 'graphql-request';

// Get all products
export const GET_PRODUCTS = gql`
  query GetProducts($first: Int = 12, $after: String, $where: RootQueryToProductConnectionWhereArgs) {
    products(first: $first, after: $after, where: $where) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on SimpleProduct {
          id
          databaseId
          name
          slug
          description
          shortDescription
          averageRating
          reviewCount
          onSale
          stockStatus
          stockQuantity
          image {
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              sourceUrl
              altText
            }
          }
          price
          regularPrice
          salePrice
          productCategories {
            nodes {
              id
              name
              slug
            }
          }
        }
        ... on VariableProduct {
          id
          databaseId
          name
          slug
          description
          shortDescription
          averageRating
          reviewCount
          onSale
          stockStatus
          image {
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              sourceUrl
              altText
            }
          }
          price
          regularPrice
          salePrice
          productCategories {
            nodes {
              id
              name
              slug
            }
          }
          variations {
            nodes {
              id
              databaseId
              name
              price
              regularPrice
              salePrice
              stockStatus
              stockQuantity
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
    }
  }
`;

// Get single product by slug
export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      ... on SimpleProduct {
        id
        databaseId
        name
        slug
        description
        shortDescription
        averageRating
        reviewCount
        onSale
        stockStatus
        stockQuantity
        image {
          sourceUrl
          altText
        }
        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }
        price
        regularPrice
        salePrice
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
        related(first: 4) {
          nodes {
            ... on SimpleProduct {
              id
              databaseId
              name
              slug
              image {
                sourceUrl
              }
              price
              regularPrice
              salePrice
              onSale
              averageRating
            }
          }
        }
      }
      ... on VariableProduct {
        id
        databaseId
        name
        slug
        description
        shortDescription
        averageRating
        reviewCount
        onSale
        stockStatus
        image {
          sourceUrl
          altText
        }
        galleryImages {
          nodes {
            sourceUrl
            altText
          }
        }
        price
        regularPrice
        salePrice
        productCategories {
          nodes {
            id
            name
            slug
          }
        }
        attributes {
          nodes {
            name
            options
            variation
          }
        }
        variations {
          nodes {
            id
            databaseId
            name
            price
            regularPrice
            salePrice
            stockStatus
            stockQuantity
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
        related(first: 4) {
          nodes {
            ... on SimpleProduct {
              id
              databaseId
              name
              slug
              image {
                sourceUrl
              }
              price
              regularPrice
              salePrice
              onSale
              averageRating
            }
          }
        }
      }
    }
  }
`;

// Get product categories
export const GET_PRODUCT_CATEGORIES = gql`
  query GetProductCategories($first: Int = 20) {
    productCategories(first: $first, where: { hideEmpty: true }) {
      nodes {
        id
        databaseId
        name
        slug
        count
        image {
          sourceUrl
          altText
        }
      }
    }
  }
`;

// Search products
export const SEARCH_PRODUCTS = gql`
  query SearchProducts($search: String!, $first: Int = 12) {
    products(first: $first, where: { search: $search }) {
      nodes {
        ... on SimpleProduct {
          id
          databaseId
          name
          slug
          image {
            sourceUrl
          }
          price
          regularPrice
          salePrice
          onSale
          averageRating
          reviewCount
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
          regularPrice
          salePrice
          onSale
          averageRating
          reviewCount
        }
      }
    }
  }
`;
