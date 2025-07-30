import { TodoCard } from '@/entities/todo/ui/todo-card';
import type { TodoType } from '@/shared/types/todo.types';

import css from './index.module.css';

type TodosListProps = {
	todos: Array<TodoType>;
};

export const TodosList = ({ todos }: TodosListProps) => {
	return (
		<ul className={css.root}>
			{todos.map((todo, index) => (
				<li key={index}>
					<TodoCard {...todo} />
				</li>
			))}
		</ul>
	);
};
