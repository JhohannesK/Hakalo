import React, { useRef, useContext, useState, useCallback } from 'react';
import Image from 'next/image';
import { BsArrowBarDown } from 'react-icons/bs';
import { ScrollContext } from '../../utils/scroll-observer';

const Masthead: React.FC = () => {
	const [loadImage, setLoadImage] = useState(false);
	const refContainer = useRef<HTMLDivElement>(null);
	const { scrollY } = useContext(ScrollContext);

	let progress = 0;

	const { current: pageCalc } = refContainer;
	if (pageCalc) {
		progress = Math.min(1, scrollY / pageCalc.clientHeight);
	}

	const animateArrowIcon = useCallback(() => {
		setLoadImage(true);
	}, []);

	return (
		<div
			ref={refContainer}
			className='min-h-screen flex flex-col items-center justify-center'
			style={{
				transform: `translateY(-${progress * 20}vh)`,
			}}
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute w-full h-full object-cover '
			>
				<source src='/vid.mp4' type='video/mp4' />
			</video>
			<div
				className={`flex-grow-0 pt-10 transition-opacity duration-1000 ${
					loadImage ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<Image
					src='/logo.svg'
					className='bg-transparent'
					height={214 / 3}
					width={228 / 3}
					alt='logo'
					onLoad={() => animateArrowIcon()}
				/>
			</div>
			<div className='p-12 font-bold z-10 text-lime-400 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col '>
				<h1 className='mb-6 text-4xl xl:text-5xl text-purple'>Hakalo</h1>
				<h2 className='mb-2 text-2xl xl:text-3xl tracking-tight text-orange '>
					<span>Real Estate </span>
					<span>| Best in the world</span>
				</h2>
			</div>
			<div
				className={`z-10 text-white transition-all duration-1000 ${
					loadImage ? 'opacity-100' : 'opacity-0 -translate-y-10'
				}`}
			>
				<BsArrowBarDown
					size={40}
					className={`animate-bounce text-orange`}
				/>
			</div>
		</div>
	);
};

export default Masthead;
