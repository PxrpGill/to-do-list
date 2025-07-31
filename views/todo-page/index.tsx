import type { NextPage } from 'next';

import type { TodoType as TodoPageProps } from '@/shared/types/todo.types';

export const Todo: NextPage<TodoPageProps> = ({
	title,
	userId,
	id,
	completed,
}) => {
	return <></>;
};
