import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.scss'
import Main from './main/Main'
const Layout = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Main />
			<Footer />
		</div>
	)
}

export default Layout
