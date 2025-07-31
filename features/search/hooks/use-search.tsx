import type { FormEvent } from 'react';
import { useCallback } from 'react';

import { useTodosManager } from '@/shared/models/todos-manager';

export const useSearch = () => {
	const { todos, setTodos } = useTodosManager();

	const handleFormSubmit = useCallback(
		(event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();

			const formData = new FormData(event.currentTarget);
			const searchValue = formData.get('search') as string;

			const searchResults = todos?.filter(todo =>
				todo.title.startsWith(searchValue)
			);

			setTodos(searchResults);
		},
		[todos, setTodos]
	);

	return {
		handleFormSubmit,
	};
};
