import cx from 'clsx';
import Link from 'next/link';
import type { PropsWithChildren } from 'react';

import css from './index.module.css';

type ButtonProps = PropsWithChildren & {
	type?: 'submit' | 'reset' | 'button';
	href?: string;
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
};

export const Button = ({
	children,
	type = 'button',
	href,
	onClick,
	className,
	disabled,
}: ButtonProps) => {
	if (href) {
		return (
			<Link href={href} className={cx(css.button, className)}>
				{children}
			</Link>
		);
	}

	return (
		<button
			disabled={disabled}
			type={type}
			className={cx(css.button, className)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
