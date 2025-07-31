import { API_URLS } from '@/shared/config/api-urls';
import { axiosInstance } from '@/shared/config/axios-instance';
import type { TodoType } from '@/shared/types/todo.types';

export const getSingleTodo = async (
	id: string
): Promise<TodoType | undefined> => {
	try {
		const response = await axiosInstance.get(API_URLS.getSingleTodo(id));

		return response.data;
	} catch (error) {
		console.error(error);

		return;
	}
};
