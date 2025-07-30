import parser from 'html-react-parser';
import Link from 'next/link';

import { HEADER_CONSTANTS } from '@/widgets/layout/models/header.constants';

import css from './index.module.css';

export const Header = () => {
	const { title, github } = HEADER_CONSTANTS;

	return (
		<header className={css.root}>
			<Link href={'/'} className={css.title}>
				{parser(title)}
			</Link>
			<Link target={'_blank'} href={github.href} className={css.link}>
				{parser(github.text)}
			</Link>
		</header>
	);
};
