import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Loader from '../components/Loader';

export default function Home() {
	return (<div>
		<Link href={{
			pathname: '/[username]',
			query: {
				username: 'banik'
			}
		}}>
			Go to banik's profile
		</Link>
		<Loader show={true} />
	</div>)
}
