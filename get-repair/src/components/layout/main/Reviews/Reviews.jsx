import { useEffect, useState } from 'react'
import styles from './Reviews.module.scss'

const reviews = [
	{
		image: './../../../../images/rew1.jpg'
	},
	{
		image: './../../../../images/rew2.jpg'
	},
	{
		image: './../../../../images/rew3.jpg'
	},
	{
		image: './../../../../images/rew4.jpg'
	},
	{
		image: './../../../../images/rew5.jpg'
	},
	{
		image: './../../../../images/rew6.jpg'
	},
	{
		image: './../../../../images/rew7.jpg'
	},
	{
		image: './../../../../images/rew8.jpg'
	},
	{
		image: './../../../../images/rew9.jpg'
	}
]

const Reviews = () => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [isMobile, setIsMobile] = useState(false)

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handlePrevClick = () => {
		setCurrentIndex(prevIndex =>
			prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
		)
	}

	const handleNextClick = () => {
		setCurrentIndex(prevIndex =>
			prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
		)
	}

	const handleDotClick = index => {
		setCurrentIndex(index)
	}

	return (
		<div className={styles.slider}>
			<div className={styles.header}>
				{!isMobile && <h2>Отзывы</h2>}
				<div className={styles.controls}>
					<button onClick={handlePrevClick}>◀</button>
					<button onClick={handleNextClick}>▶</button>
				</div>
			</div>
			<div className={styles.reviews}>
				{reviews.map((review, index) => (
					<div
						key={index}
						className={`${styles.review} ${
							index === currentIndex ? styles.active : ''
						}`}
					>
						<img src={review.image} alt={`Отзыв ${index + 1}`} />
					</div>
				))}
			</div>
			{!isMobile && (
				<div className={styles.dots}>
					{reviews.map((_, index) => (
						<div
							key={index}
							className={`${styles.dot} ${
								index === currentIndex ? styles.activeDot : ''
							}`}
							onClick={() => handleDotClick(index)}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default Reviews
