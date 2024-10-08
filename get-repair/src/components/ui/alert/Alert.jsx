import cn from 'clsx'
import PropTypes from 'prop-types'
import styles from './Alert.module.scss'

const Alert = ({ text, hidden }) => {
	return (
		<div className={cn(styles.alert, { [styles['alert-hidden']]: hidden })}>
			{text}
		</div>
	)
}

Alert.propTypes = {
	text: PropTypes.string.isRequired,
	hidden: PropTypes.bool
}

Alert.defaultProps = {
	hidden: false
}

export default Alert
