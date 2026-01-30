# Headless WooCommerce Setup Guide

This guide explains how to connect the React frontend to WordPress + WooCommerce via GraphQL.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     React Frontend (Lovable)                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  Products   │  │    Cart     │  │      Checkout       │  │
│  │  useProducts│  │  useCart    │  │  (WooCommerce URL)  │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
│         │                │                     │            │
└─────────┼────────────────┼─────────────────────┼────────────┘
          │                │                     │
          ▼                ▼                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    GraphQL API Layer                        │
│              https://your-site.com/graphql                  │
└─────────────────────────────────────────────────────────────┘
          │
          ▼
┌─────────────────────────────────────────────────────────────┐
│                WordPress + WooCommerce                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │  WPGraphQL  │  │ WooGraphQL  │  │  JWT Auth Plugin    │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              MySQL Database                          │    │
│  │  Products | Orders | Customers | Sessions           │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Step 1: WordPress Plugin Installation

Install these plugins on your WordPress site:

### Required Plugins:
1. **WPGraphQL** (free)
   - Download: https://wordpress.org/plugins/wp-graphql/
   - Provides GraphQL API endpoint at `/graphql`

2. **WPGraphQL for WooCommerce** (free)
   - Download: https://github.com/wp-graphql/wp-graphql-woocommerce
   - Adds WooCommerce product, cart, and order queries

3. **WPGraphQL JWT Authentication** (free - for user auth)
   - Download: https://github.com/wp-graphql/wp-graphql-jwt-authentication
   - Enables user login/registration via GraphQL

### Optional Plugins:
4. **WPGraphQL CORS** - For handling CORS headers
5. **WPGraphQL for ACF** - If using Advanced Custom Fields

## Step 2: WordPress Configuration

### Enable GraphQL Introspection (for development)
In `wp-config.php`:
```php
define('GRAPHQL_DEBUG', true);
```

### Configure CORS
Add to your theme's `functions.php` or a custom plugin:

```php
/**
 * Add CORS headers for GraphQL
 */
add_action('graphql_response_headers_to_send', function($headers) {
    // Replace with your React app URL
    $allowed_origins = [
        'https://your-lovable-app.lovable.app',
        'http://localhost:5173',
    ];
    
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? $_SERVER['HTTP_ORIGIN'] : '';
    
    if (in_array($origin, $allowed_origins)) {
        $headers['Access-Control-Allow-Origin'] = $origin;
        $headers['Access-Control-Allow-Credentials'] = 'true';
        $headers['Access-Control-Allow-Headers'] = 'Authorization, Content-Type, woocommerce-session';
        $headers['Access-Control-Expose-Headers'] = 'woocommerce-session';
    }
    
    return $headers;
});
```

### Configure WooCommerce Session Handling
Add to `functions.php`:

```php
/**
 * Enable session handling for headless
 */
add_filter('woocommerce_session_handler', function($handler) {
    return 'WC_Session_Handler';
});

/**
 * Extend session token expiration
 */
add_filter('woocommerce_session_expiration', function() {
    return 60 * 60 * 24 * 7; // 7 days
});
```

## Step 3: React Configuration

### Set Environment Variable
Create or update your `.env` file (or use Lovable's secrets):

```env
VITE_WORDPRESS_URL=https://your-wordpress-site.com
```

### Update GraphQL Client
The client is configured in `src/lib/graphql/client.ts`. 
Make sure `VITE_WORDPRESS_URL` points to your WordPress installation.

## Step 4: Usage Examples

### Fetch Products
```tsx
import { useProducts } from '@/hooks/useWooProducts';

function ProductList() {
  const { data: products, isLoading, error } = useProducts({
    first: 12,
    categorySlug: 'indoor-plants',
  });
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  
  return (
    <div className="grid grid-cols-4 gap-6">
      {products?.nodes.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Add to Cart
```tsx
import { useAddToCart } from '@/hooks/useWooCart';

function AddToCartButton({ productId }: { productId: number }) {
  const { mutate: addToCart, isPending } = useAddToCart();
  
  return (
    <button 
      onClick={() => addToCart({ productId, quantity: 1 })}
      disabled={isPending}
    >
      {isPending ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
```

### Display Cart
```tsx
import { useCart, useRemoveCartItem } from '@/hooks/useWooCart';

function Cart() {
  const { data: cart, isLoading } = useCart();
  const { mutate: removeItem } = useRemoveCartItem();
  
  if (isLoading) return <div>Loading cart...</div>;
  
  return (
    <div>
      <h2>Your Cart ({cart?.contents.itemCount} items)</h2>
      {cart?.contents.nodes.map(item => (
        <div key={item.key}>
          <span>{item.product.node.name}</span>
          <span>{item.quantity} x {item.product.node.price}</span>
          <button onClick={() => removeItem([item.key])}>Remove</button>
        </div>
      ))}
      <div>Total: {cart?.total}</div>
    </div>
  );
}
```

## Step 5: Checkout Integration

For checkout, you have two options:

### Option A: Redirect to WooCommerce Checkout (Recommended)
Redirect users to WooCommerce's native checkout page:

```tsx
const handleCheckout = () => {
  window.location.href = `${import.meta.env.VITE_WORDPRESS_URL}/checkout`;
};
```

### Option B: Headless Checkout (Advanced)
Use WooGraphQL's checkout mutation (requires payment gateway integration):

```graphql
mutation Checkout($input: CheckoutInput!) {
  checkout(input: $input) {
    order {
      id
      orderNumber
      status
    }
    result
    redirect
  }
}
```

## Testing the Integration

1. **Test GraphQL Endpoint**
   Visit `https://your-site.com/graphql` in browser - should show GraphQL IDE

2. **Test Query**
   ```graphql
   query {
     products(first: 3) {
       nodes {
         name
         price
       }
     }
   }
   ```

3. **Check CORS**
   Open browser dev tools, check for CORS errors when fetching from React app

## Troubleshooting

### CORS Errors
- Verify origin is in allowed list
- Check `Access-Control-Allow-Credentials` header
- Ensure cookies are being sent with requests

### Cart Not Persisting
- Check `woocommerce-session` header is being stored
- Verify session token is sent with subsequent requests
- Check WooCommerce session handler configuration

### Products Not Loading
- Verify WPGraphQL and WooGraphQL plugins are active
- Check GraphQL endpoint is accessible
- Test query in GraphQL IDE first

## Security Considerations

1. **Use HTTPS** - Always use HTTPS in production
2. **Restrict Origins** - Only allow your React app's origin
3. **Rate Limiting** - Implement rate limiting on GraphQL endpoint
4. **Validate Inputs** - WooGraphQL handles most validation
5. **Hide Introspection** - Disable in production:
   ```php
   add_filter('graphql_disable_introspection', '__return_true');
   ```
