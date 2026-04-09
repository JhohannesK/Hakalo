import React from 'react';

interface WrapperProps {
	numOfPages: number;
}

interface TileContextValue {
	currentPage: number;
	numOfPages: number;
}

export const TileContext = React.createContext<TileContextValue>({
	currentPage: 0,
	numOfPages: 0,
});

const Tile: React.FC<WrapperProps> = ({ numOfPages }) => {
	const capabilities = [
		{
			title: 'Design Systems',
			description:
				'Unified UI foundations with component libraries, token governance, and scalable theming.',
		},
		{
			title: 'Product Engineering',
			description:
				'Full-stack build pipelines from architecture to production hardening and observability.',
		},
		{
			title: 'Performance Culture',
			description:
				'Continuous tuning for Core Web Vitals, runtime efficiency, and smooth interaction quality.',
		},
	];
	const visibleCapabilities = capabilities.slice(0, Math.max(numOfPages, 1));

	return (
		<section className='py-20 md:py-24'>
			<div className='max-w-6xl mx-auto px-6 md:px-10'>
				<div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10'>
					<div>
						<h3 className='section-title text-3xl md:text-4xl'>What we ship</h3>
						<p className='subtle-text mt-2 text-base md:text-lg'>
							High-signal execution across product, platform, and performance.
						</p>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6'>
					{visibleCapabilities.map((item) => (
						<article
							key={item.title}
							className='glass-panel rounded-2xl p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20'
						>
							<div className='h-8 w-8 rounded-full bg-gradient-to-br from-accent/60 to-cyan-300/40 animate-glow-pulse' />
							<h4 className='mt-5 text-xl md:text-2xl font-semibold tracking-tight text-ink'>
								{item.title}
							</h4>
							<p className='mt-3 text-sm md:text-base leading-relaxed text-muted'>
								{item.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Tile;
