'use client';

import { TodoCard } from '@/entities/todo/ui/todo-card';
import { Pagination } from '@/features/pagination';
import { usePagination } from '@/features/pagination/hooks/use-pagination';
import type { TodoType } from '@/shared/types/todo.types';

import css from './index.module.css';

export type TodosListProps = {
	todos: Array<TodoType>;
};

export const TodosList = ({ todos }: TodosListProps) => {
	const {
		pages,
		lastPageNumber,
		currentPageNumber,
		handleNextPage,
		handlePrevPage,
	} = usePagination({ todos });

	return (
		<div className={css.root}>
			<ul className={css.list}>
				{pages &&
					pages[currentPageNumber]?.map((todo, index) => (
						<li key={index} className={css.paragraph}>
							<TodoCard {...todo} />
						</li>
					))}
			</ul>
			<Pagination
				className={css.pagination}
				lastPageNumber={lastPageNumber}
				currentPageNumber={currentPageNumber}
				handleNextPage={handleNextPage}
				handlePrevPage={handlePrevPage}
			/>
		</div>
	);
};
