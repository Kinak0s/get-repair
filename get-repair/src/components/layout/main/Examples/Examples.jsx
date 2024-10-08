import styles from './Examples.module.scss'

const images = [
	{ title: 'Сборка игрового ПК', image: './../../../../images/1.webp' },
	{
		title: 'Чистка и замена термопасты',
		image: './../../../../images/2.webp'
	},
	{ title: 'Ускорение ноутбука', image: './../../../../images/3.webp' },
	{
		title: 'Установка операционной системы ноутбука',
		image: './../../../../images/4.webp'
	},
	{
		title: 'Чистка клавиатуры и замена термопасты Sony Vaio',
		image: './../../../../images/5.webp'
	},
	{
		title: 'Обслуживание видеокарты NVIDIA',
		image: './../../../../images/6.webp'
	}
]

const Examples = () => {
	return (
		<div className={styles.examples}>
			<h2>Примеры работ</h2>
			<table>
				<thead>
					<tr>
						<th>Задача</th>
						<th>Результат</th>
					</tr>
				</thead>
				<tbody>
					{images.map((work, index) => (
						<tr key={index}>
							<td>{work.title}</td>
							<td>
								<img
									src={work.image}
									alt={work.title}
									className={styles.image}
								/>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default Examples
