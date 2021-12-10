import type { NextPage, } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import landing from '../styles/landing.module.scss';

const Landing: NextPage<{  }> = ({  }) => {
	return (
		<div className={landing.container}>
			<div className={landing.nav}>
				<Link href='/' passHref={true}>
					<Image src="/images/login-logo.svg" alt="logo" width="135px" height="34px" />
				</Link>
				<div>
					<button className={landing.joinNowBtn}>Join Now</button>
					<button className={landing.signInBtn}>Sign In</button>
				</div>
			</div>
			<div className={landing.hero}>
				<div className={landing.heroText}>
					<span>Millions of jobs and people hiring</span>
				</div>
				<div className={landing.heroImage}>
					<Image src="/images/login-hero.svg" alt="hero-image" width="700px" height="670px" />
				</div>
			</div>
			<div className={landing.google}>
				<button className={landing.googleBtn}>
					<Image src='/images/google.svg' alt="google" width="50px" height="50px" />
					<span>Sign In With Google</span>
				</button>
			</div>
		</div>
	);
};

export default Landing;
