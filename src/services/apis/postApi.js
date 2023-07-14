import api from '../apiService';
const url = api.defaults.baseURL + "posts/";

export default {
	getAll: (count, page) => {
		return api.get(url);
	},
	getPaginated: (paginatedUrl) => {
		const paginated = paginatedUrl ?? `${url}?page=1`;
		return api.get(paginated);
	},
	getById: (id) => {
		return api.get(url + id);
	},
	create: (newData) => {
		return api.post(url, newData);
	},
	update: (newData, id) => {
		return api.put(url + id, newData);
	},
	delete: (id) => {
		return api.delete(url + id);
	},
};