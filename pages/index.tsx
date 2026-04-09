import type { NextPage } from 'next';
import Head from 'next/head';
import About from './components/About';
import Masthead from './components/masthead';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Tile from './components/Tile';

const Home: NextPage = () => {
	return (
		<main>
			<Head>
				<title>Hakalo | Premium Engineering</title>
				<meta
					name='description'
					content='Hakalo builds premium digital experiences with world-class product engineering.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Masthead />
			<About />
			<Skills />
			<Tile numOfPages={3} />
			<Footer />
		</main>
	);
};

export default Home;
