'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import { Search } from '@/features/search';
import { useTodosManager } from '@/shared/models/todos-manager';
import WrapperAnimationComponent from '@/shared/ui/wrapper-animation';
import { TODOS_SECTION_TITLE } from '@/widgets/todos-main-list/models/todos-main-list.constants';
import { EmptyTodos } from '@/widgets/todos-main-list/ui/empty-todos';
import { TodosList } from '@/widgets/todos-main-list/ui/todos-list';

import css from './index.module.css';

type TodosSectionProps = {
	className?: string;
};

export const TodosSection = ({ className }: TodosSectionProps) => {
	const { todos } = useTodosManager();
	const isTodosLength = todos && todos.length > 0;

	return (
		<section className={cx(css.root, className, 'container')}>
			<WrapperAnimationComponent.H4 className={css.title}>
				{parser(TODOS_SECTION_TITLE)}
			</WrapperAnimationComponent.H4>
			<Search />
			{isTodosLength ? <TodosList todos={todos} /> : <EmptyTodos />}
		</section>
	);
};
