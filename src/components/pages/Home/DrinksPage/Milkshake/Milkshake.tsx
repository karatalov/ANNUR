import { MILKSHAKE } from '../data/MILKSHAKE'
import './Milkshake.scss'

const SECTIONS = [
	{ key: 'milkshake', label: 'Молочные коктейли' },
	{ key: 'lemonade', label: 'Лимонады' },
]

const ShakeIcon = () => (
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
		<path d="M26 22h28l-5 40H31L26 22z" />
		<path d="M22 22h36" />
		<path d="M34 14 Q36 10 40 14 Q44 18 48 14" />
		<line x1="33" y1="38" x2="47" y2="38" />
		<path d="M40 22 Q44 30 40 38" />
	</svg>
)

const Milkshake = () => {
	const grouped = SECTIONS.map((s) => ({
		...s,
		items: MILKSHAKE.filter((d) => d.category === s.key),
	}))

	return (
		<section id="milkshake">
			<div className="container">
				<div className="milkshake__header">
					<p className="milkshake__eyebrow">
						<span />
						Напитки
						<span />
					</p>
					<h2 className="milkshake__title">Коктейли и лимонады</h2>
					<p className="milkshake__desc">
						Нежные молочные коктейли и освежающие домашние лимонады
					</p>
				</div>

				{grouped.map((section, si) => (
					<div
						key={section.key}
						className="milkshake__section"
						style={{ '--si': si } as React.CSSProperties}
					>
						<div className="milkshake__section-header">
							<span className="milkshake__section-icon">
								<ShakeIcon />
							</span>
							<h3 className="milkshake__section-title">{section.label}</h3>
							<span className="milkshake__section-line" />
						</div>

						<ul className="milkshake__list">
							{section.items.map((item, i) => (
								<li
									key={item.id}
									className="milkshake__item"
									style={{ '--i': i } as React.CSSProperties}
								>
									<span className="milkshake__item-name">{item.name}</span>
									<span className="milkshake__item-dots" aria-hidden="true" />
									<span className="milkshake__item-gram">{item.gram}</span>
									<span className="milkshake__item-price">{item.price}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Milkshake
