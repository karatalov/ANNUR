import { COFFEE } from '../data/COFFEE'
import './Coffee.scss'

const SECTIONS = [
	{ key: 'coffee', label: 'Кофе', icon: '☕' },
	{ key: 'alt', label: 'Альтернативное молоко', icon: '🌿' },
]

const CoffeeIcon = () => (
	<svg
		viewBox="0 0 80 80"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
		width="36"
		height="36"
	>
		<path d="M18 28h34l-4 28H22L18 28z" />
		<path d="M52 34h6a6 6 0 0 1 0 12h-6" />
		<path d="M28 18 Q30 12 34 18" />
		<path d="M38 16 Q40 10 44 16" />
	</svg>
)

const Coffee = () => {
	const grouped = SECTIONS.map((s) => ({
		...s,
		items: COFFEE.filter((c) => c.category === s.key),
	}))

	return (
		<section id="coffee">
			<div className="container">
				<div className="coffee__header">
					<p className="coffee__eyebrow">
						<span />
						Напитки
						<span />
					</p>
					<h2 className="coffee__title">Кофейная карта</h2>
					<p className="coffee__desc">
						Авторские напитки на основе свежеобжаренного зерна и отборного
						молока
					</p>
				</div>

				{grouped.map((section, si) => (
					<div
						key={section.key}
						className="coffee__section"
						style={{ '--si': si } as React.CSSProperties}
					>
						<div className="coffee__section-header">
							<span className="coffee__section-icon">
								<CoffeeIcon />
							</span>
							<h3 className="coffee__section-title">{section.label}</h3>
							<span className="coffee__section-line" />
						</div>

						<ul className="coffee__list">
							{section.items.map((item, i) => (
								<li
									key={item.id}
									className="coffee__item"
									style={{ '--i': i } as React.CSSProperties}
								>
									<span className="coffee__item-name">{item.name}</span>
									<span className="coffee__item-dots" aria-hidden="true" />
									<span className="coffee__item-gram">{item.gram}</span>
									<span className="coffee__item-price">{item.price}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Coffee
