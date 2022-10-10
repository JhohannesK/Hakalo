import type { NextPage } from 'next';
import Head from 'next/head';
import Masthead from './components/masthead';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Masthead />
		</div>
	);
};

export default Home;