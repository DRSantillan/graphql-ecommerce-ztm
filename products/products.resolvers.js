import {
	getAllProducts,
	getAllProductsByPrice,
	getProductByID,
	addNewProduct,
	addNewProductReview,
} from './products.model.js';

export default {
	Query: {
		products: () => {
			return getAllProducts();
		},
		productsByPrice: (_, args) => {
			return getAllProductsByPrice(args.min, args.max);
		},
		ProductByID: (_, args) => {
			return getProductByID(args.id);
		},
	},
	Mutation: {
		addNewProduct: (_, args) => {
			return addNewProduct(args.id, args.description, args.price);
		},
		addNewProductReview: (_, args) => {
			return addNewProductReview(args.id, args.rating, args.comment);
		},
	},
};
