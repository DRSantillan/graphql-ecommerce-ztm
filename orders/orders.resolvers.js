import { getAllOrders } from './orders.model';

export default {
	Query: {
		orders: () => {
			return getAllOrders();
		},
	},
};
