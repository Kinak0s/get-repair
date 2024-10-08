import styles from './Name.module.scss'

const Name = () => {
	return (
		<div className={styles.name}>
			<img src='./../../../../images/Icon.jpg' draggable={false} />
			<span>Михаил Гаврилов</span>
		</div>
	)
}

export default Name
