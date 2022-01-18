const products = [
	{
		id: 'redshoe',
		description: 'Red Shoe',
		price: 39.99,
		reviews: [
			{
				rating: 5,
				comment: 'absolutely beautiful shoes',
			},
		],
	},
	{
		id: 'bluejean',
		description: 'Blue Jean',
		price: 59.99,
		reviews: [],
	},
];

const getAllProducts = () => {
	return products;
};

const getAllProductsByPrice = (min, max) => {
	return products.filter(product => {
		console.log(product);
		return product.price >= min && product.price <= max;
	});
};

const getProductByID = id => {
	return products.find(product => product.id === id);
};

const addNewProduct = (id, description, price) => {
	const newProduct = {
		id,
		description,
		price,
		reviews: [],
	};
	products.push(newProduct);
	return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
	const newReview = {
		rating,
		comment,
	};
	const mutateProduct = products.find(product => product.id === id);

	mutateProduct.reviews.push(newReview);

	return mutateProduct;
};

export {
	getAllProducts,
	getAllProductsByPrice,
	getProductByID,
	addNewProduct,
	addNewProductReview,
};
