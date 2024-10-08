import styles from './Card.module.scss'

const Card = ({ ...card }) => {
	return (
		<div className={styles.card}>
			<h2>{card.title}</h2>
			<span className={styles.content}>{card.content}</span>
		</div>
	)
}

export default Card
