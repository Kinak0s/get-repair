import cn from 'clsx'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import Name from './Name/Name'
import Nav from './Nav/Nav'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			setIsScrolled(true)
		} else {
			setIsScrolled(false)
		}
	})

	return (
		<div className={cn(styles.header, { [styles.scrolled]: isScrolled })}>
			<Logo />
			<Nav isMenuOpen={isMenuOpen} />
			<Name />
			<button
				className={cn(styles.menuButton, { [styles.open]: isMenuOpen })}
				onClick={toggleMenu}
			>
				{isMenuOpen ? <FaTimes /> : <FaBars />}
				<span>Menu</span>
			</button>
		</div>
	)
}

export default Header
