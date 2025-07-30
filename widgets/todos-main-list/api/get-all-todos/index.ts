import { API_URLS } from '@/shared/config/api-urls';
import { axiosInstance } from '@/shared/config/axios-instance';
import type { TodoType } from '@/shared/types/todo.types';

export type TodosListType = Array<TodoType>;

export const getAllTodos = async (): Promise<TodosListType | undefined> => {
	try {
		const response = await axiosInstance.get(API_URLS.getAllTodos);

		return response.data;
	} catch (error) {
		console.error(error);
		return;
	}
};
