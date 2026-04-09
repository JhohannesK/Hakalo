import React from 'react';
import Member from './Member';

const About: React.FC = () => {
	return (
		<section className='relative flex flex-col pt-20 pb-24 text-xl md:text-2xl overflow-hidden'>
			<div className='container mx-auto px-6 md:px-10'>
				<p className='leading-tight max-w-5xl mx-auto text-3xl md:text-4xl lg:text-5xl text-ink section-title'>
					<strong>We build premium digital products, faster.</strong>{' '}
					<span className='subtle-text font-normal'>
						Our engineering squad combines architecture, UI craft, and delivery
						rigor to ship products that feel high-end and perform at scale.
					</span>
				</p>
			</div>
			<div className='container mx-auto px-6 md:px-10 text-center mt-20 md:mt-24'>
				<h2 className='section-title text-4xl md:text-5xl'>Our Team</h2>
				<div className='mt-3 text-base md:text-lg subtle-text'>
					the &ldquo;spec-ops&rdquo;
				</div>
				<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8'>
					<Member
						id={'edem'}
						name={'Edem Jonathan Akuaku'}
						socialId={'@Edem'}
						link={'#'}
					/>
					<Member
						id='kwaw'
						name='Kwaw Kumi Miezah'
						socialId='@kumi'
						link='#'
					/>
					<Member
						id='trevenue'
						name='Paul Treve'
						socialId='@trevenue'
						link='#'
					/>
					<Member
						id='jose'
						name='Joseph Ofoe Domeh'
						socialId='@Joe'
						link='#'
					/>
					<Member
						id='Mike'
						name='Michael Ofoe Domeh'
						socialId='@mike'
						link='#'
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
