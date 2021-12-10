import { NextPage, } from "next";
import Image from "next/image";
import Link from "next/link";
import header from '../styles/header.module.scss';

const Header: NextPage<{}> = ({  }) => {
	return (<div className={header.container}>
		<div className={header.content}>
			<span className={header.logo}>
				<Link href='/home' passHref={true}>
					<Image src="/images/home-logo.svg" alt="logo" width='80px' height='70px'/>
				</Link>
			</span>
			<span className={header.search}>
                
			</span>
		</div>
	</div>
	);
};

export default Header;