import React from 'react';
import Image from 'next/image';

interface Props {
	id: string;
	name: string;
	socialId: string;
	link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => {
	return (
		<div
			id={id}
			className='glass-panel group rounded-2xl p-4 md:p-5 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(2,5,20,0.55)]'
		>
			<div className='overflow-hidden rounded-xl bg-surfaceSoft/80'>
				<Image
					src='/ImageOne.svg'
					alt={name}
					width={1366}
					height={1555}
					className='w-full h-auto transition-transform duration-500 group-hover:scale-105'
				/>
			</div>
			<div className='mt-4 text-lg md:text-xl font-semibold leading-tight text-ink'>
				{name}
			</div>
			<div className='text-sm md:text-base text-muted mt-2'>
				{link !== '#' ? (
					<a href={link} target='_blank' rel='noreferrer' className='hover:text-accent transition-colors'>
						{socialId}
					</a>
				) : (
					<p>{socialId}</p>
				)}
			</div>
		</div>
	);
};

export default Member;
