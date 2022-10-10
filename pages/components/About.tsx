import React from 'react';
import Member from './Member';

const About: React.FC = () => {
	return (
		<section className='flex flex-col bg-white pt-0 pb-20 text-3xl md:text-4xl'>
			<div className='container mx-auto px-11'>
				<p className='leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl'>
					<strong>We will help you ship better apps, faster.</strong> Our
					team of expert engineers has created the best user experience in
					some of the most popular apps worldwide.
				</p>
			</div>
			<div className='container mx-auto px-11 text-center mt-28'>
				<h2>Our Team</h2>
				<div className='mt-2'>the &ldquo;spec-ops&rdquo;</div>
				<div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
					<Member
						id='edem'
						name='Edem Jonathan Akuaku'
						socialId='@Edem'
						link='#'
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
