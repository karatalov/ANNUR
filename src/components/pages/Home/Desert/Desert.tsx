import { DESSERTS } from './data/DESERT'
import './Desert.scss'

const DessertIcon = () => (
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
		<path d="M20 48 Q20 62 40 64 Q60 62 60 48 Q60 38 40 36 Q20 38 20 48Z" />
		<path d="M28 36 Q28 26 40 24 Q52 26 52 36" />
		<line x1="40" y1="24" x2="40" y2="14" />
		<circle cx="40" cy="11" r="4" />
		<path d="M26 48 Q33 52 40 50 Q47 48 54 52" />
	</svg>
)

const Desserts = () => (
	<section id="desserts">
		<div className="container">
			<div className="desserts__header">
				<p className="desserts__eyebrow">
					<span />
					Сладкое
					<span />
				</p>
				<h2 className="desserts__title">Десерты</h2>
				<p className="desserts__desc">
					Авторские пирожные, трайфлы и свежая фруктовая нарезка
				</p>
			</div>

			<div className="desserts__section">
				<div className="desserts__section-header">
					<span className="desserts__section-icon">
						<DessertIcon />
					</span>
					<h3 className="desserts__section-title">Десерты</h3>
					<span className="desserts__section-line" />
				</div>

				<ul className="desserts__list">
					{DESSERTS.map((item, i) => (
						<li
							key={item.id}
							className="desserts__item"
							style={{ '--i': i } as React.CSSProperties}
						>
							<span className="desserts__item-name">{item.name}</span>
							<span className="desserts__item-dots" aria-hidden="true" />
							{item.gram && (
								<span className="desserts__item-gram">{item.gram} кг</span>
							)}
							<span className="desserts__item-price">{item.price}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
)

export default Desserts
