/**
 * GraphQL Client for WooCommerce Headless
 * 
 * Connect to WordPress + WooCommerce via WPGraphQL
 */

import { GraphQLClient } from 'graphql-request';

// WordPress GraphQL endpoint - update this with your WordPress URL
const WORDPRESS_URL = import.meta.env.VITE_WORDPRESS_URL || 'https://your-wordpress-site.com';
const GRAPHQL_ENDPOINT = `${WORDPRESS_URL}/graphql`;

// Create GraphQL client
export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
  },
});

// Session token for cart (stored in localStorage)
const SESSION_KEY = 'woo-session';

export const getSession = (): string | null => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(SESSION_KEY);
  }
  return null;
};

export const setSession = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(SESSION_KEY, token);
  }
};

// Create authenticated client with session
export const getAuthenticatedClient = () => {
  const session = getSession();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  
  if (session) {
    headers['woocommerce-session'] = `Session ${session}`;
  }
  
  return new GraphQLClient(GRAPHQL_ENDPOINT, { headers });
};

// Helper to handle response and extract session token
export const handleGraphQLResponse = <T>(response: T, headers?: Headers): T => {
  if (headers) {
    const session = headers.get('woocommerce-session');
    if (session) {
      setSession(session);
    }
  }
  return response;
};
