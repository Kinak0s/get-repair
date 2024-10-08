import PropTypes from 'prop-types'
import { useState } from 'react'
import Alert from '../../ui/alert/Alert'

const Copy = ({ text }) => {
	const [alertVisible, setAlertVisible] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(text)
		setAlertVisible(true)
		setTimeout(() => setAlertVisible(false), 2000)
	}

	return (
		<div>
			<span className='copy-to-clipboard' onClick={handleCopy}>
				{text}
			</span>
			{alertVisible && (
				<Alert text='Номер скопирован в буфер обмена!' hidden={!alertVisible} />
			)}
		</div>
	)
}

Copy.propTypes = {
	text: PropTypes.string.isRequired
}

export default Copy
