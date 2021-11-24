import type { NextComponentType } from 'next';
import styles from '../styles/Header.module.css';
import Link from 'next/link';

const Header: NextComponentType = () => {
    return (
        <div className={styles.header}>
            <li className={styles.headerElement}><Link href='/'>Home</Link></li>
            <li className={styles.headerElement}><Link href='/about'>About</Link></li>
        </div>
    )
}

export default Header;