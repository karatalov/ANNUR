import './DesertsPage.scss'

interface Dessert {
	name: string
	price?: number
	note?: string
}

const DESSERTS: Dessert[] = [
	{ name: 'Фруктовый ролл' },
	{ name: 'Сэндвич с клубникой', price: 600 },
	{ name: 'Чизкейк классический', price: 350 },
	{ name: 'Чизкейк манго', price: 350 },
	{ name: 'Чизкейк шоколадный', price: 350 },
	{ name: 'Три шоколада', price: 350 },
	{ name: 'Красный бархат', price: 350 },
	{ name: 'Трайфл Наполеон', price: 350 },
	{ name: 'Трайфл Сникерс', price: 370 },
	{ name: 'Трайфл шоколадный', price: 350 },
	{ name: 'Трайфл дубайский', price: 450 },
	{ name: 'Трайфл карамельный', price: 350 },
	{ name: 'Трайфл классический', price: 350 },
	{ name: 'Трайфл Красный бархат', price: 350 },
	{ name: 'Медовый', price: 350 },
	{ name: 'Шоколадно-медовый', price: 350 },
	{ name: 'Фруктовая нарезка 0.7', price: 450 },
	{ name: 'Фруктовая нарезка' },
]

const DesertsPage = () => {
	return (
		<div className="deserts">
			<div className="deserts__blob deserts__blob--1" aria-hidden="true" />
			<div className="deserts__blob deserts__blob--2" aria-hidden="true" />
			<div className="deserts__blob deserts__blob--3" aria-hidden="true" />

			<div className="container">
				<header className="deserts__header">
					<p className="deserts__eyebrow">
						<span />
						ANNUR
						<span />
					</p>
					<h1 className="deserts__title">Десерты</h1>
					<p className="deserts__subtitle">Сладкое завершение вашего вечера</p>
				</header>

				<div className="deserts__deco" aria-hidden="true">
					18
				</div>

				<ul className="deserts__list">
					{DESSERTS.map((d, i) => (
						<li
							key={i}
							className={`deserts__item ${!d.price ? 'deserts__item--no-price' : ''}`}
							style={{ '--i': i } as React.CSSProperties}
						>
							<span className="deserts__item-name">{d.name}</span>
							<span className="deserts__item-dots" aria-hidden="true" />
							<span className="deserts__item-price">
								{d.price ? (
									<>
										{d.price} <em>с</em>
									</>
								) : (
									'—'
								)}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default DesertsPage
