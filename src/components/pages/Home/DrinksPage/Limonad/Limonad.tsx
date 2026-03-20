import { LIMONAD } from '../data/LIMONAD'
import './Limonad.scss'

const SECTIONS = [
	{ key: 'cold', label: 'Прохладительные напитки' },
	{ key: 'ice', label: 'Смузи и айс-напитки' },
]

const DrinkIcon = () => (
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
		<path d="M24 18h32l-6 44H30L24 18z" />
		<path d="M24 18l-4-6h40l-4 6" />
		<line x1="30" y1="36" x2="50" y2="36" />
		<path d="M40 18 Q44 28 40 36" />
	</svg>
)

const Limonad = () => {
	const grouped = SECTIONS.map((s) => ({
		...s,
		items: LIMONAD.filter((d) => d.category === s.key),
	}))

	return (
		<section id="limonad">
			<div className="container">
				<div className="limonad__header">
					<p className="limonad__eyebrow">
						<span />
						Напитки
						<span />
					</p>
					<h2 className="limonad__title">Холодные напитки</h2>
					<p className="limonad__desc">
						Освежающие напитки, свежевыжатые соки и авторские айс-коктейли
					</p>
				</div>

				{grouped.map((section, si) => (
					<div
						key={section.key}
						className="limonad__section"
						style={{ '--si': si } as React.CSSProperties}
					>
						<div className="limonad__section-header">
							<span className="limonad__section-icon">
								<DrinkIcon />
							</span>
							<h3 className="limonad__section-title">{section.label}</h3>
							<span className="limonad__section-line" />
						</div>

						<ul className="limonad__list">
							{section.items.map((item, i) => (
								<li
									key={item.id}
									className="limonad__item"
									style={{ '--i': i } as React.CSSProperties}
								>
									<span className="limonad__item-name">{item.name}</span>
									<span className="limonad__item-dots" aria-hidden="true" />
									<span className="limonad__item-gram">{item.gram}</span>
									<span className="limonad__item-price">{item.price}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Limonad
