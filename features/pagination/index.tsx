import cx from 'clsx';
import parser from 'html-react-parser';

import { Button } from '@/shared/ui/button';

import css from './index.module.css';
import { PAGINATION_CONSTANTS } from './models/pagination.constants';

type PaginationProps = {
	className?: string;
	lastPageNumber?: number;
	currentPageNumber: number;
	handleNextPage: () => void;
	handlePrevPage: () => void;
};

export const Pagination = ({
	className,
	lastPageNumber,
	currentPageNumber,
	handleNextPage,
	handlePrevPage,
}: PaginationProps) => {
	const { prevButton, nextButton } = PAGINATION_CONSTANTS;

	return (
		<div className={cx(css.root, className)}>
			<div className={css.buttonBlock}>
				<span className={css.label}>{1}</span>
				<Button
					className={css.button}
					disabled={currentPageNumber === 0}
					onClick={handlePrevPage}
				>
					{parser(prevButton)}
				</Button>
			</div>
			<div className={css.buttonBlock}>
				<Button
					className={css.button}
					disabled={currentPageNumber === (lastPageNumber ?? 1) - 1}
					onClick={handleNextPage}
				>
					{parser(nextButton)}
				</Button>
				<span className={css.label}>{lastPageNumber}</span>
			</div>
		</div>
	);
};
