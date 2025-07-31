import { getAllTodos } from '@/widgets/todos-main-list/api/get-all-todos';

export const revalidate = 10;

export const generateStaticParams = async () => {
	try {
		const initialTodos = await getAllTodos();

		return initialTodos?.map(todo => ({ id: todo.id.toString() })) ?? [];
	} catch {
		return [];
	}
};

const TodoPage = () => {
	return <></>;
};

export default TodoPage;
