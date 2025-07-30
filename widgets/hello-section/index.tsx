'use client';

import cx from 'clsx';
import parser from 'html-react-parser';

import WrapperAnimationComponent from '@/shared/ui/wrapper-animation';

import css from './index.module.css';
import {
	HELLO_DESCRIPTION,
	HELLO_TITLE,
} from './models/hello-section.constants';

type HelloSectionProps = {
	className?: string;
};

export const HelloSection = ({ className }: HelloSectionProps) => {
	return (
		<WrapperAnimationComponent.Section
			className={cx(css.root, className, 'container')}
		>
			<h1 className={css.title}>{parser(HELLO_TITLE)}</h1>
			<p className={css.description}>{parser(HELLO_DESCRIPTION)}</p>
		</WrapperAnimationComponent.Section>
	);
};
