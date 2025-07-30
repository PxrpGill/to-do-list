import cx from 'clsx';
import parser from 'html-react-parser';
import Link from 'next/link';

import { TODO_CONSTANTS } from '@/entities/todo/ui/models/todo.constants';
import type { TodoType } from '@/shared/types/todo.types';
import WrapperAnimationComponent from '@/shared/ui/wrapper-animation';

import css from './index.module.css';

type TodoCardProps = TodoType & {
	className?: string;
};

export const TodoCard = ({
	className,
	title,
	userId,
	id,
	completed,
}: TodoCardProps) => {
	const {
		userIDlabel,
		todoIDlabel,
		todoLink,
		todoLabelDescription,
		isCompletedLabel,
	} = TODO_CONSTANTS;

	return (
		<WrapperAnimationComponent.Article className={cx(css.root, className)}>
			<p className={css.todoId}>{parser(todoIDlabel + id)}</p>
			<p className={css.userId}>{parser(userIDlabel + userId)}</p>
			<h3 className={css.title}>{parser(todoLabelDescription + title)}</h3>
			<label htmlFor="checkbox" className={css.label}>
				<input id="checkbox" type="checkbox" readOnly checked={completed} />
				{parser(isCompletedLabel)}
			</label>
			<Link className={css.link} href={todoLink + id} />
		</WrapperAnimationComponent.Article>
	);
};
