import React from 'react';

const Footer = () => {
	return (
		<footer className='h-24 mx-auto max-w-6xl px-6 md:px-10 flex items-center justify-between text-sm md:text-base border-t border-borderSoft'>
			<p className='text-muted'>Made with intent by JhohannesK</p>
			<p className='text-ink font-medium'>Hakalo © {new Date().getFullYear()}</p>
		</footer>
	);
};

export default Footer;
