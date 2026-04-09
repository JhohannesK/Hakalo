import React, { useContext, useRef } from 'react';
import style from '../../styles/skills.module.css';
import { ScrollContext } from '../../utils/scroll-observer';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
	const progress = sectionProgress - blockNo;
	if (progress >= 0 && progress < 1) return 1;
	return 0.35;
};

const Skills: React.FC = () => {
	const { scrollY } = useContext(ScrollContext);
	const refContainer = useRef<HTMLDivElement>(null);
	const blocks = [
		'We know our tools inside out.',
		'Our team has contributed over 200 commits to Next.js, powering production apps worldwide.',
		'We maintain high-impact open-source projects trusted by thousands of teams.',
	];

	const numOfPages = 3;
	let progress = 0;

	const { current: pageCalc } = refContainer;
	if (pageCalc) {
		const { clientHeight, offsetTop } = pageCalc;
		const screenH = window.innerHeight;
		const halfH = screenH / 2;
		const percentY =
			Math.min(
				clientHeight + halfH,
				Math.max(-screenH, scrollY - offsetTop) + halfH
			) / clientHeight;
		progress = Math.min(
			numOfPages - 0.5,
			Math.max(0.5, percentY * numOfPages)
		);
	}

	return (
		<div ref={refContainer} className='relative'>
			<div className='min-h-screen max-w-5xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-24 lg:py-28 flex flex-col justify-center'>
				<div className='text-sm uppercase tracking-[0.2em] text-accentSoft/80 mb-6'>
					Proof in output
				</div>
				<div className='leading-[1.13] text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight'>
					{blocks.map((block, index) => {
						const blockOpacity = opacityForBlock(progress, index);
						const isActive = blockOpacity > 0.2;
						return (
							<p
								key={block}
								className={`${style.skillText} mb-5 md:mb-6 ${
									isActive ? 'text-ink' : 'text-muted'
								}`}
								style={{
									opacity: blockOpacity,
									transform: `translateY(${isActive ? 0 : 14}px) scale(${
										isActive ? 1 : 0.985
									})`,
								}}
							>
								{block}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Skills;
