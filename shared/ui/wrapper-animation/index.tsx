/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion } from 'framer-motion';
import type { ElementType, PropsWithChildren, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { variants } from './wrapper-animation.config';

type WrapperAnimationProps = {
	className?: string;
} & PropsWithChildren;

const motionProps = {
	variants: variants.text.variant,
	initial: 'onscreen',
	whileInView: 'offscreen',
	viewport: { once: true },
};

const MOTION_COMPONENTS: Record<string, ElementType> = {
	div: motion.div,
	li: motion.li,
	article: motion.article,
	section: motion.section,
	p: motion.p,
	h2: motion.h2,
	h4: motion.h4,
	h1: motion.h1,
} as const;

const MotionWrapper =
	<Tag extends keyof typeof MOTION_COMPONENTS>(tag: Tag) =>
	({ children, className }: WrapperAnimationProps, ref: ForwardedRef<any>) => {
		const MotionComponent = MOTION_COMPONENTS[tag];

		return (
			<MotionComponent {...motionProps} className={className} ref={ref}>
				{children}
			</MotionComponent>
		);
	};

const WrapperAnimation = forwardRef<HTMLDivElement, WrapperAnimationProps>(
	({ className, children }, ref) => (
		<motion.div {...motionProps} className={className} ref={ref}>
			{children}
		</motion.div>
	)
);

type WrapperAnimationWithComponents = {
	Li: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLLIElement>
	>;
	Article: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLElement>
	>;
	Section: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLElement>
	>;
	Paragraph: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLParagraphElement>
	>;
	Title: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLHeadingElement>
	>;
	Div: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLDivElement>
	>;
	H4: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLHeadingElement>
	>;
	H1: React.ForwardRefExoticComponent<
		WrapperAnimationProps & React.RefAttributes<HTMLHeadingElement>
	>;
} & React.ForwardRefExoticComponent<
	WrapperAnimationProps & React.RefAttributes<HTMLDivElement>
>;

const WrapperAnimationComponent =
	WrapperAnimation as WrapperAnimationWithComponents;

WrapperAnimationComponent.Li = forwardRef(MotionWrapper('li'));
WrapperAnimationComponent.Article = forwardRef(MotionWrapper('article'));
WrapperAnimationComponent.Section = forwardRef(MotionWrapper('section'));
WrapperAnimationComponent.Paragraph = forwardRef(MotionWrapper('p'));
WrapperAnimationComponent.Title = forwardRef(MotionWrapper('h2'));
WrapperAnimationComponent.Div = forwardRef(MotionWrapper('div'));
WrapperAnimationComponent.H4 = forwardRef(MotionWrapper('h4'));
WrapperAnimationComponent.H1 = forwardRef(MotionWrapper('h1'));

export default WrapperAnimationComponent;
