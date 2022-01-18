import productsResolver from '../products/products.resolvers.js';
import ordersResolver from '../orders/orders.resolvers.js';

const allResolvers = [productsResolver, ordersResolver];

export { allResolvers };
