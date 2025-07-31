import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';
import WrapperAnimationComponent from '@/shared/ui/wrapper-animation';
import { EMPTY_TODOS_CONSTANTS } from '@/widgets/todos-main-list/models/todos-main-list.constants';

import css from './index.module.css';

export const EmptyTodos = () => {
	const { title, description, refreshButton } = EMPTY_TODOS_CONSTANTS;

	const handleRefreshPage = () => {
		window.location.reload();
	};

	return (
		<WrapperAnimationComponent.Article className={css.root}>
			<h3 className={css.title}>{parser(title)}</h3>
			<p className={css.description}>{parser(description)}</p>
			<Button className={css.button} onClick={handleRefreshPage}>
				{parser(refreshButton)}
			</Button>
		</WrapperAnimationComponent.Article>
	);
};
