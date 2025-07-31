import type { NextPage } from 'next';

import type { TodoType as TodoPageProps } from '@/shared/types/todo.types';
import { DetailTodo } from '@/widgets/detail-todo';

import css from './index.module.css';

export const Todo: NextPage<TodoPageProps> = todo => {
	return (
		<>
			<DetailTodo className={css.detail} {...todo} />
		</>
	);
};
