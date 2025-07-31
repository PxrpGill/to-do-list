import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

import type { TodoType } from './todo.types';

export type TodosManagerProps = {
	todos?: Array<TodoType>;
	setTodos: Dispatch<SetStateAction<Array<TodoType> | undefined>>;
};

export type TodosManagerProviderProps = PropsWithChildren & {
	initialTodos?: Array<TodoType>;
};
