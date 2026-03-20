import { JAPANESE_FOODS } from '../data/JAPANESE_COLDS'
import './ColdRolls.scss'

const PlaceholderIcon = () => (
	<svg
		viewBox="0 0 80 80"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.3"
		strokeLinecap="round"
		strokeLinejoin="round"
		width="44"
		height="44"
	>
		<ellipse cx="40" cy="52" rx="24" ry="9" />
		<path d="M16 52 Q40 34 64 52" />
		<line x1="28" y1="22" x2="34" y2="46" />
		<line x1="46" y1="20" x2="52" y2="46" />
		<circle cx="40" cy="52" r="5" />
	</svg>
)

const ColdRolls = () => (
	<section id="cold-rolls">
		<div className="container">
			<div className="cold-rolls__header">
				<p className="cold-rolls__eyebrow">
					<span />
					Японская кухня
					<span />
				</p>
				<h2 className="cold-rolls__title">Холодные роллы</h2>
				<p className="cold-rolls__desc">
					Свежайшие ингредиенты, рис собственного приготовления и мастерство
					шеф-повара
				</p>
			</div>

			<div className="cold-rolls__grid">
				{JAPANESE_FOODS.map((item, i) => (
					<article
						key={item.id}
						className="cold-rolls__card"
						style={{ '--i': i } as React.CSSProperties}
					>
						<div className="cold-rolls__img-wrap">
							{item.image ? (
								<img
									src={item.image}
									alt={item.name}
									className="cold-rolls__img"
									loading="lazy"
								/>
							) : (
								<div className="cold-rolls__placeholder">
									<PlaceholderIcon />
								</div>
							)}
							<span className="cold-rolls__gram">{item.gram}</span>
						</div>

						<div className="cold-rolls__body">
							<h3 className="cold-rolls__name">{item.name}</h3>
							<span className="cold-rolls__price">{item.price}</span>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
)

export default ColdRolls
