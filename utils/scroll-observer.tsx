import React, { useEffect, useState } from 'react';

interface ScrollValue {
	scrollY: number;
}

export const ScrollContext = React.createContext<ScrollValue>({
	scrollY: 0,
});

const ScrollObserver = ({ children }: React.PropsWithChildren) => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		document.addEventListener('scroll', handleScroll, { passive: true });

		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<ScrollContext.Provider value={{ scrollY }}>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollObserver;
