import Link from 'next/link';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';

export default function Home() {
	return (<div>
		<NavBar user='' userName='' />
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
