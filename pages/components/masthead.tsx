import React, { useContext, useRef, useState } from 'react';
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

	return (
		<div
			ref={refContainer}
			className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'
			style={{
				transform: `translate3d(0, -${progress * 14}vh, 0)`,
			}}
		>
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute inset-0 w-full h-full object-cover scale-105 saturate-[0.75] contrast-125 brightness-[0.55]'
			>
				<source src='/vid.mp4' type='video/mp4' />
			</video>

			<div className='absolute inset-0 bg-gradient-to-b from-[#05070dcc] via-[#0b1022b8] to-[#090b10]' />
			<div className='floating-orb h-44 w-44 bg-[#8ba9ff3d] top-[14%] left-[8%]' />
			<div
				className='floating-orb h-36 w-36 bg-[#89f6ff2e] top-[22%] right-[12%]'
				style={{ animationDelay: '2s' }}
			/>

			<div className='relative z-10 w-full max-w-6xl px-8 py-14 md:py-20 flex flex-col items-center text-center'>
				<div
					className={`transition-all duration-700 ${
						loadImage
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-6'
					}`}
				>
					<Image
						src='/logo.svg'
						className='bg-transparent drop-shadow-[0_6px_14px_rgba(8,12,28,0.6)]'
						height={214 / 3}
						width={228 / 3}
						alt='logo'
						onLoad={() => setLoadImage(true)}
					/>
				</div>

				<div
					className={`glass-panel mt-8 md:mt-10 rounded-3xl px-6 md:px-12 py-8 md:py-12 max-w-3xl transition-all duration-700 ${
						loadImage
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-10'
					}`}
				>
					<h1 className='text-4xl md:text-6xl xl:text-7xl font-semibold tracking-tight text-ink'>
						Hakalo
					</h1>
					<h2 className='mt-4 text-base md:text-xl xl:text-2xl font-medium tracking-tight text-accentSoft'>
						<span>Universe of Devs</span>
						<span className='mx-2 text-muted'>|</span>
						<span className='text-ink'>Best in the world</span>
					</h2>
					<p className='mt-5 text-sm md:text-base text-muted leading-relaxed'>
						Product engineering with clean systems, sharp execution, and
						design that feels effortless.
					</p>
				</div>

				<div
					className={`mt-10 md:mt-12 z-10 text-accentSoft transition-all duration-700 ${
						loadImage
							? 'opacity-100 translate-y-0'
							: 'opacity-0 -translate-y-8'
					}`}
				>
					<BsArrowBarDown
						size={36}
						className='animate-bounce drop-shadow-[0_0_18px_rgba(139,169,255,0.45)]'
					/>
				</div>
			</div>
		</div>
	);
};

export default Masthead;
