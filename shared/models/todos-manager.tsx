import { createContext, useCallback, useContext, useState } from 'react';

import type { TodoType } from '@/shared/types/todo.types';
import type {
	TodosManagerProps,
	TodosManagerProviderProps,
} from '@/shared/types/todos-manager.types';

export const TodosContext = createContext<TodosManagerProps | null>(null);

export const TodosManagerProvider = ({
	children,
	initialTodos,
}: TodosManagerProviderProps) => {
	const [originalTodos] = useState<Array<TodoType> | undefined>(initialTodos);
	const [todos, setTodos] = useState<Array<TodoType> | undefined>(
		originalTodos
	);

	const resetTodosChanges = useCallback(() => {
		setTodos(originalTodos);
	}, [originalTodos]);

	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos,
				resetTodosChanges,
			}}
		>
			{children}
		</TodosContext.Provider>
	);
};

export const useTodosManager = () => {
	const context = useContext(TodosContext);

	if (!context)
		throw new Error(
			'useTodosManager mast be used within a TodosManagerProvider'
		);

	return context;
};
