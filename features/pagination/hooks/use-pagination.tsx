import { useCallback, useEffect, useState } from 'react';

import type { TodoType } from '@/shared/types/todo.types';
import type { TodosListProps } from '@/widgets/todos-main-list/ui/todos-list';

const ITEMS_PER_PAGE = 10;

export const usePagination = ({ todos }: TodosListProps) => {
	const [pages, setPages] = useState<Array<Array<TodoType>>>();
	const [currentPageNumber, setCurrentPageNumber] = useState<number>(0);

	const convertPages = useCallback(() => {
		if (!todos?.length) {
			setPages([]);
			setCurrentPageNumber(0);
			return;
		}

		const newPages: Array<Array<TodoType>> = [];

		for (let i = 0; i < todos.length; i += ITEMS_PER_PAGE) {
			newPages.push(todos.slice(i, i + ITEMS_PER_PAGE));
		}

		setPages(newPages);
		setCurrentPageNumber(0);
	}, [todos]);

	useEffect(() => {
		convertPages();
	}, [todos, convertPages]);

	const handleNextPage = useCallback(() => {
		if (!pages) return;

		setCurrentPageNumber(prev => Math.min(prev + 1, pages.length - 1));
	}, [pages]);

	const handlePrevPage = useCallback(() => {
		if (!pages) return;

		setCurrentPageNumber(prev => Math.max(prev - 1, 0));
	}, [pages]);

	return {
		currentPageNumber,
		pages,
		lastPageNumber: pages?.length,
		handleNextPage,
		handlePrevPage,
	};
};
