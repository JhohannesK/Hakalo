import React, { useContext, useRef } from 'react';
import style from '../../styles/skills.module.css';
import { ScrollContext } from '../../utils/scroll-observer';

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
	const progress = sectionProgress - blockNo;
	if (progress >= 0 && progress < 1) return 1;
	return 0.2;
};

const Skills: React.FC = () => {
	const { scrollY } = useContext(ScrollContext);
	console.log('🚀 ~ file: Skills.tsx:13 ~ scrollY:', scrollY);
	const refContainer = useRef<HTMLDivElement>(null);

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
		<div ref={refContainer} className='bg-orange'>
			<div className='min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold'>
				<div className='leading-[1.15]'>
					<div
						className={style.skillText}
						style={{ opacity: opacityForBlock(progress, 0) }}
					>
						We know our tools inside out.
					</div>
					<span
						className={`${style.skillText} inline-block after:content-['-']`}
						style={{ opacity: opacityForBlock(progress, 1) }}
					>
						Our team has contributed 200 commits to Nextjs, powering
						thousands of apps worldwide
					</span>
					<span
						className={`${style.skillText} inline-block `}
						style={{ opacity: opacityForBlock(progress, 2) }}
					>
						{' '}
						We&apos;re maintaining some of the most popular open-source
						projects, with over 2K forks{' '}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Skills;
