import type { NextPage, } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import home from '../styles/home.module.css'; 

const Home: NextPage = () => {
	return (
		<div className={home.container}>
			<div className={home.nav}>
				<Link href='/' passHref={true}>
					<Image src="/images/login-logo.svg" alt="logo" width="135px" height="34px"/>
				</Link>
				<div>
					<button className={home.joinNowBtn}>Join Now</button>
					<button className={home.signInBtn}>Sign In</button>
				</div>
			</div>
			<section className={home.hero}>
				<div className={home.heroText}>
					<span>Millions of jobs and people hiring</span>
				</div>
				<div className={home.heroImage}>
					<Image src="/images/login-hero.svg" alt="hero-image" width="700px" height="670px" />
				</div>
			</section>
		</div>
	);
};

export default Home;
