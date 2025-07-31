'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import type { TodoType } from '@/shared/types/todo.types';

import css from './index.module.css';
import { DETAIL_TODO_CONSTANTS } from './models/detail-todo.constants';

type DetailTodoProps = TodoType & {
	className?: string;
};

export const DetailTodo = ({
	className,
	title,
	id,
	userId,
	completed,
}: DetailTodoProps) => {
	const { convertTitle, convertCreator, convertDescription, convertCompleted } =
		DETAIL_TODO_CONSTANTS;

	return (
		<section className={cx(css.root, className, 'container')}>
			<h1 className={css.title}>{parser(convertTitle(id))}</h1>
			<p className={css.creator}>{parser(convertCreator(userId))}</p>
			<p className={css.description}>{parser(convertDescription(title))}</p>
			<p className={cx(css.completed, { [css.isCompleted]: completed })}>
				{parser(convertCompleted(completed))}
			</p>
		</section>
	);
};
