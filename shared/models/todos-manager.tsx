import { createContext, useContext, useState } from 'react';

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
	const [todos, setTodos] = useState<Array<TodoType> | undefined>(initialTodos);
    
	return (
		<TodosContext.Provider
			value={{
				todos,
				setTodos,
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
