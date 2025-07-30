import type { PropsWithChildren } from 'react';

import { Header } from './ui/header';

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			{children}
		</>
	);
};
