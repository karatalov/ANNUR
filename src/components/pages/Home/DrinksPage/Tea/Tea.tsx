import { useEffect } from 'react'
import { TEA } from '../data/TEA'
import './Tea.scss'

const SECTIONS = [
	{ key: 'chinese', label: 'Китайские чаи' },
	{ key: 'signature', label: 'Фирменные чаи' },
	{ key: 'extras', label: 'Добавки к чаю' },
]

const TeaIcon = () => (
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
		<path d="M20 30h32l-4 26H24L20 30z" />
		<path d="M52 36h6a6 6 0 0 1 0 12h-6" />
		<path d="M30 22 Q32 16 36 22" />
		<path d="M40 20 Q42 14 46 20" />
		<line x1="32" y1="56" x2="48" y2="56" />
	</svg>
)

const Tea = () => {
	const grouped = SECTIONS.map((s) => ({
		...s,
		items: TEA.filter((t) => t.category === s.key),
	}))

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<section id="tea">
			<div className="container">
				<div className="tea__header">
					<p className="tea__eyebrow">
						<span />
						Напитки
						<span />
					</p>
					<h2 className="tea__title">Чайная карта</h2>
					<p className="tea__desc">
						Редкие сорта со всего мира и авторские фирменные купажи
					</p>
				</div>

				{grouped.map((section, si) => (
					<div
						key={section.key}
						className="tea__section"
						style={{ '--si': si } as React.CSSProperties}
					>
						<div className="tea__section-header">
							<span className="tea__section-icon">
								<TeaIcon />
							</span>
							<h3 className="tea__section-title">{section.label}</h3>
							<span className="tea__section-line" />
						</div>

						<ul className="tea__list">
							{section.items.map((item, i) => (
								<li
									key={item.id}
									className="tea__item"
									style={{ '--i': i } as React.CSSProperties}
								>
									<span className="tea__item-name">{item.name}</span>
									<span className="tea__item-dots" aria-hidden="true" />
									{item.gram && (
										<span className="tea__item-gram">{item.gram}</span>
									)}
									<span className="tea__item-price">{item.price}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Tea
