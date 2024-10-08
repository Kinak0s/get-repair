import Card from './Card/Card'
import Examples from './Examples/Examples'
import styles from './Main.module.scss'
import Reviews from './Reviews/Reviews'

const cardInfo = [
	{ title: 'Опыт', content: 'Более 15 лет в сфере IT' },
	{
		title: 'Разнообразие услуг',
		content:
			'Абсолютно любая помощь от обновления ПО компьютера до замены комплектующих'
	},
	{
		title: 'Гибкость',
		content:
			'Возможность оказания услуг как через удаленный доступ, так и с выездом на дом или в офис'
	},
	{
		title: 'Гарантия',
		content:
			'Обеспечение защиты персональных данных и гарантия на все выполненные работы, программное обеспечение и запчасти'
	},
	{ title: 'Доступность', content: 'Готов ответить на любые вопросы. ' },
	{
		title: 'Качество работы',
		content:
			'Апгрейд компьютеров с максимальной эффективностью по соотношению цена-скорость'
	}
]

const Main = () => {
	return (
		<>
			<div className={styles.main}>
				<h1 className={styles.heading}>
					Почему Вам следует довериться именно мне?
				</h1>
				{cardInfo.map((card, index) => (
					<Card
						className={styles.cardGap}
						key={index}
						title={card.title}
						content={card.content}
					/>
				))}
			</div>
			<div className={styles.main} id='examples'>
				<Examples />
			</div>

			<div className={styles.main} id='rev'>
				<Reviews />
			</div>
		</>
	)
}

export default Main
