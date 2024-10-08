import { GoGear } from 'react-icons/go'
import styles from './Logo.module.scss'

const Logo = () => {
	return (
		<button className={styles.logo}>
			<a href='#top'>
				<GoGear alt='Logo' style={{ color: 'white', fontSize: '32px' }} />
			</a>
			<span>GetRepair</span>
		</button>
	)
}

export default Logo
