import { getAllProducts } from './products.model';

export default {
	Query: {
		products: () => {
			return getAllProducts();
		},
	},
};
