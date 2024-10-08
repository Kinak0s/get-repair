import styles from './Nav.module.scss'

const Nav = () => {
	return (
		<nav className={styles.nav}>
			<ul>
				<li>
					<a href='#top'>Информация обо мне</a>
				</li>
				<li>
					<a href='#examples'>Примеры работ</a>
				</li>
				<li>
					<a href='#rev'>Отзывы</a>
				</li>
				<li>
					<a href='#contacts'>Контакты</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
