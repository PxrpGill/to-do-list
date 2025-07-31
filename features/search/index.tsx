'use client';

import parser from 'html-react-parser';

import { useTodosManager } from '@/shared/models/todos-manager';
import { Button } from '@/shared/ui/button';
import WrapperAnimationComponent from '@/shared/ui/wrapper-animation';

import { useSearch } from './hooks/use-search';
import css from './index.module.css';
import { SEARCH_CONSTANTS } from './models/search.constants';

export const Search = () => {
	const { sectionTitle, searchPlaceholder, searchButton, resetButton } =
		SEARCH_CONSTANTS;
	const { resetTodosChanges } = useTodosManager();
	const { handleFormSubmit } = useSearch();

	return (
		<WrapperAnimationComponent.Section className={css.root}>
			<h4 className={css.title}>{parser(sectionTitle)}</h4>
			<form
				onSubmit={handleFormSubmit}
				className={css.form}
				onReset={resetTodosChanges}
			>
				<input
					autoComplete="off"
					name="search"
					type="text"
					className={css.input}
					placeholder={searchPlaceholder}
				/>
				<div className={css.buttonPanel}>
					<Button className={css.button} type="submit">
						{parser(searchButton)}
					</Button>
					<Button type="reset" className={css.button}>
						{parser(resetButton)}
					</Button>
				</div>
			</form>
		</WrapperAnimationComponent.Section>
	);
};
