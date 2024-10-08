import { useEffect, useState } from 'react'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { FaYandex } from 'react-icons/fa6'
import Copy from './Copy'
import styles from './Footer.module.scss'

const Footer = () => {
	const [isMobile, setIsMobile] = useState(false)

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 736)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<div className={styles.footer} id='contacts'>
			<div className={styles.time}>
				<h3>{isMobile ? '' : 'Время работы:'}</h3>
				<span>{isMobile ? '9-23. 24/7' : 'Круглосуточно. 9:00-23:00'}</span>
			</div>

			<ul className={styles.links}>
				<li>
					<button>
						<a href='https://uslugi.yandex.ru/profile/MikhailGavrilov-321379?from=suggest&occupationId=%2Fremont-i-ustanovka-tehniki&specId=6275&text=%D0%B3%D0%B0%D0%B2%D1%80%D0%B8%D0%BB%D0%BE%D0%B2+%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB&utm_campaign=ssa_brand_ru.ru_alldevices_hand.roi&utm_content=gid%7C5068524562%7Caid%7C13017291616%7C47539651990&utm_medium=search&utm_source=yandex&utm_term=---autotargeting&yclid=9825183086720581631#6275'>
							{isMobile ? (
								<FaYandex style={{ color: 'white', fontSize: '24px' }} />
							) : (
								<FaYandex style={{ color: 'white', fontSize: '32px' }} />
							)}
						</a>
					</button>
				</li>
				<li>
					<button>
						<a href='https://t.me/Mishanya_Comp_Remont'>
							{isMobile ? (
								<FaTelegramPlane style={{ color: 'white', fontSize: '24px' }} />
							) : (
								<FaTelegramPlane style={{ color: 'white', fontSize: '32px' }} />
							)}
						</a>
					</button>
				</li>
				<li>
					<button>
						<a href='https://wa.me/+79587836338'>
							{isMobile ? (
								<FaWhatsapp style={{ color: 'white', fontSize: '24px' }} />
							) : (
								<FaWhatsapp style={{ color: 'white', fontSize: '32px' }} />
							)}
						</a>
					</button>
				</li>
			</ul>

			<div className={styles.number}>
				<Copy text='+7(958)783‑63‑38'>+7(958)783‑63‑38</Copy>
			</div>
		</div>
	)
}

export default Footer
