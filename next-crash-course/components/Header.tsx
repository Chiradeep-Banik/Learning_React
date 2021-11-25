import type { NextPage } from 'next';
import Link from 'next/link';
import headerStyles from '../styles/Header.module.css';

const Header: NextPage = () => {
    return (
        <div className={headerStyles.header}>
            <li className={headerStyles.headerElement}><Link href='/'>Home</Link></li>
            <li className={headerStyles.headerElement}><Link href='/about'>About</Link></li>
            <li className={headerStyles.headerElement}><Link href='/comments'>Comments</Link></li>
        </div>
    )
}

export default Header;