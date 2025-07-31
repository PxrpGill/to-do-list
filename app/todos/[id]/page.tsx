import { notFound } from 'next/navigation';

import { Todo } from '@/views/todo-page';
import { getSingleTodo } from '@/views/todo-page/api/get-single-todo';
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

type TodoPageProps = {
	params: Promise<{
		id: string;
	}>;
};

const TodoPage = async ({ params }: TodoPageProps) => {
	const { id } = await params;
	const initialTodo = await getSingleTodo(id);

	if (!initialTodo) return notFound();

	return <Todo {...initialTodo} />;
};

export default TodoPage;
