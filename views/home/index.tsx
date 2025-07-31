'use client';

import type { NextPage } from 'next';

import { TodosManagerProvider } from '@/shared/models/todos-manager';
import { HelloSection } from '@/widgets/hello-section';
import { TodosSection } from '@/widgets/todos-main-list';
import type { TodosListType } from '@/widgets/todos-main-list/api/get-all-todos';

import css from './index.module.css';

type HomePageProps = {
	todos?: TodosListType | undefined;
};

export const Home: NextPage<HomePageProps> = ({ todos }) => {
	return (
		<>
			<HelloSection />
			<TodosManagerProvider initialTodos={todos}>
				<TodosSection className={css.todosSection} />
			</TodosManagerProvider>
		</>
	);
};
