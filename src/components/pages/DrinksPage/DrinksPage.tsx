import { useState } from 'react'
import './DrinksPage.scss'

interface DrinkItem {
	name: string
	volume?: string
	price?: number
}

interface DrinkSection {
	id: string
	title: string
	emoji: string
	items: DrinkItem[]
}

const SECTIONS: DrinkSection[] = [
	{
		id: 'coffee',
		title: 'Кофе',
		emoji: '☕',
		items: [
			{ name: 'Doppio', volume: '80 мл', price: 180 },
			{ name: 'Американо', volume: '180 мл', price: 180 },
			{ name: 'Капучино', volume: '180 мл', price: 200 },
			{ name: 'Латте', volume: '220 мл', price: 200 },
			{ name: 'Капучино', volume: '350 мл', price: 230 },
			{ name: 'Какао', volume: '220 мл', price: 230 },
			{ name: 'Матча латте', volume: '220 мл', price: 230 },
			{ name: 'Гляссе', volume: '250 мл', price: 350 },
			{ name: 'Раф-кофе', volume: '250 мл', price: 300 },
			{ name: 'Флэт уайт', volume: '200 мл', price: 230 },
			{ name: 'Горячий шоколад', volume: '80 мл', price: 250 },
			{ name: 'Глинтвейн (безалкогольный)', volume: '200 мл', price: 300 },
		],
	},
	{
		id: 'alt-milk',
		title: 'Альтернативное молоко',
		emoji: '🌿',
		items: [
			{ name: 'Латте кокос', volume: '220 мл', price: 270 },
			{ name: 'Латте миндаль', volume: '220 мл', price: 270 },
			{ name: 'Капучино на кокосе', volume: '200 мл', price: 270 },
			{ name: 'Капучино на кокосе', volume: '350 мл', price: 300 },
			{ name: 'Капучино на миндале', volume: '200 мл', price: 270 },
			{ name: 'Капучино на миндале', volume: '350 мл', price: 300 },
			{ name: 'Матча кокос', volume: '220 мл', price: 300 },
			{ name: 'Матча на миндале', volume: '220 мл', price: 300 },
		],
	},
	{
		id: 'chinese-tea',
		title: 'Китайские чаи',
		emoji: '🍵',
		items: [
			{ name: 'Чай чёрный / зелёный', price: 180 },
			{ name: 'Чай Сенча', price: 280 },
			{ name: 'Чай Молочный Улун', price: 280 },
			{ name: 'Чай Жемчужина Жасмина', price: 280 },
			{ name: 'Чай Те Гуань Инь', price: 280 },
			{ name: 'Чай Эрл Грей', price: 280 },
			{ name: 'Чай Пуэр', price: 280 },
			{ name: 'Чай Да Хун Пао', price: 280 },
			{ name: 'Чай Травяной Сбор', price: 280 },
		],
	},
	{
		id: 'signature-tea',
		title: 'Фирменные чаи',
		emoji: '✨',
		items: [
			{ name: 'Чай Облепиховый', price: 300 },
			{ name: 'Чай Ягодный', price: 300 },
			{ name: 'Чай Имбирный', price: 300 },
			{ name: 'Чай Фруктовый', price: 300 },
			{ name: 'Чай Ташкентский', price: 400 },
			{ name: 'Чай Ройбуш-Маракуйя', price: 350 },
			{ name: 'Чай с молоком', price: 250 },
		],
	},
	{
		id: 'tea-add',
		title: 'Добавки к чаю',
		emoji: '🍋',
		items: [
			{ name: 'Апельсин', volume: '50 г', price: 70 },
			{ name: 'Лимон', volume: '50 г', price: 50 },
			{ name: 'Имбирь', volume: '40 г', price: 60 },
			{ name: 'Молоко', volume: '100 г', price: 50 },
			{ name: 'Мёд', volume: '50 г', price: 100 },
			{ name: 'Сиропы', volume: '50 г', price: 50 },
		],
	},
	{
		id: 'soft',
		title: 'Прохладительные напитки',
		emoji: '🥤',
		items: [
			{ name: 'Coca-Cola', volume: '500 мл', price: 200 },
			{ name: 'Fanta', volume: '500 мл', price: 200 },
			{ name: 'Sprite', volume: '500 мл', price: 200 },
			{ name: 'Schweppes', volume: '500 мл', price: 200 },
			{ name: 'Легенда', volume: '330 мл', price: 100 },
			{ name: 'Мин. вода без газа', volume: '1 л', price: 180 },
			{ name: 'Мин. вода с газом', volume: '1 л', price: 180 },
			{ name: 'Натуральный сок J7', volume: '1 л', price: 280 },
			{ name: 'Натуральный сок J7', volume: '200 мл', price: 100 },
			{ name: 'Фреш-апельсин', volume: '250 мл', price: 380 },
			{ name: 'Фреш-апельсин', volume: '1 л', price: 1300 },
			{ name: 'Бал Кымыз', volume: '500 мл', price: 260 },
		],
	},
	{
		id: 'smoothie',
		title: 'Смузи',
		emoji: '🧃',
		items: [
			{ name: 'Айс-Американо', volume: '400 мл', price: 250 },
			{ name: 'Айс-Арахис', volume: '400 мл', price: 350 },
			{ name: 'Айс-Латте', volume: '400 мл', price: 350 },
			{ name: 'Айс-Фраппучино', volume: '400 мл', price: 350 },
			{ name: 'Матча Айс', volume: '400 мл', price: 350 },
			{ name: 'Айс Теа', volume: '400 мл', price: 220 },
			{ name: 'Айс Теа по-японски', volume: '400 мл', price: 370 },
			{ name: 'Сакура Берри', volume: '400 мл', price: 370 },
		],
	},
	{
		id: 'milkshake',
		title: 'Молочные коктейли',
		emoji: '🥛',
		items: [
			{ name: 'Ванильный', volume: '400 мл', price: 400 },
			{ name: 'Клубничный', volume: '400 мл', price: 400 },
			{ name: 'Орео', volume: '400 мл', price: 400 },
			{ name: 'Шоколадный', volume: '400 мл', price: 400 },
		],
	},
	{
		id: 'lemonade',
		title: 'Лимонады',
		emoji: '🍹',
		items: [
			{ name: 'Домашний лимонад', volume: '400 мл', price: 350 },
			{ name: 'Манго Маракуйя', volume: '400 мл', price: 350 },
			{ name: 'Мохито', volume: '400 мл', price: 350 },
			{ name: 'Мята-Маракуйя', volume: '400 мл', price: 350 },
			{ name: 'Цитрусовый', volume: '400 мл', price: 300 },
			{ name: 'Юдзу-Лимон', volume: '400 мл', price: 300 },
			{ name: 'Ягодный', volume: '400 мл', price: 350 },
			{ name: 'Манго-Маракуйя', volume: '1 л', price: 700 },
			{ name: 'Мохито', volume: '1 л', price: 700 },
			{ name: 'Мята-Маракуйя', volume: '1 л', price: 700 },
			{ name: 'Ягодный', volume: '1 л' },
		],
	},
]

const DrinksPage = () => {
	const [active, setActive] = useState<string>('coffee')

	const activeSection = SECTIONS.find((s) => s.id === active)!

	return (
		<div className="drinks">
			<div className="drinks__blob drinks__blob--1" aria-hidden="true" />
			<div className="drinks__blob drinks__blob--2" aria-hidden="true" />

			<div className="container">
				{/* header */}
				<header className="drinks__header">
					<p className="drinks__eyebrow">
						<span />
						ANNUR
						<span />
					</p>
					<h1 className="drinks__title">Напитки</h1>
					<p className="drinks__subtitle">Меню напитков нашего кафе</p>
				</header>

				{/* tab bar */}
				<nav className="drinks__tabs" aria-label="Категории напитков">
					{SECTIONS.map((s) => (
						<button
							key={s.id}
							className={`drinks__tab ${active === s.id ? 'drinks__tab--active' : ''}`}
							onClick={() => setActive(s.id)}
						>
							<span className="drinks__tab-emoji">{s.emoji}</span>
							<span className="drinks__tab-label">{s.title}</span>
						</button>
					))}
				</nav>

				{/* items list */}
				<div className="drinks__panel" key={active}>
					<h2 className="drinks__section-title">
						{activeSection.emoji} {activeSection.title}
					</h2>
					<ul className="drinks__list">
						{activeSection.items.map((item, i) => (
							<li
								key={i}
								className="drinks__item"
								style={{ '--i': i } as React.CSSProperties}
							>
								<span className="drinks__item-name">{item.name}</span>
								<span className="drinks__item-dots" aria-hidden="true" />
								<span className="drinks__item-right">
									{item.volume && (
										<span className="drinks__item-vol">{item.volume}</span>
									)}
									{item.price ? (
										<span className="drinks__item-price">{item.price} с</span>
									) : (
										<span className="drinks__item-price drinks__item-price--tbd">
											—
										</span>
									)}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default DrinksPage
