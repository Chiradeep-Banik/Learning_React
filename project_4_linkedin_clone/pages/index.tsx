import type { NextPage, } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import home from '../styles/home.module.scss';

const Home: NextPage = () => {
	return (
		<div className={home.container}>
			<div className={home.nav}>
				<Link href='/' passHref={true}>
					<Image src="/images/login-logo.svg" alt="logo" width="135px" height="34px" />
				</Link>
				<div>
					<button className={home.joinNowBtn}>Join Now</button>
					<button className={home.signInBtn}>Sign In</button>
				</div>
			</div>
			<div className={home.hero}>
				<div className={home.heroText}>
					<span>Millions of jobs and people hiring</span>
				</div>
				<div className={home.heroImage}>
					<Image src="/images/login-hero.svg" alt="hero-image" width="700px" height="670px" />
				</div>
			</div>
			<div className={home.google}>
				<button className={home.googleBtn}>
					<Image src='/images/google.svg' alt="google" width="50px" height="50px" />
					<span>Sign In With Google</span>
				</button>
			</div>
		</div>
	);
};

export default Home;
