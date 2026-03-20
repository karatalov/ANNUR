import { JAPANESE_BAKEDS } from '../data/JAPANESE_BAKEDS'
import './BakedRolls.scss'

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

const BakedRolls = () => (
	<section id="baked-rolls">
		<div className="container">
			<div className="baked-rolls__header">
				<p className="baked-rolls__eyebrow">
					<span />
					Японская кухня
					<span />
				</p>
				<h2 className="baked-rolls__title">Запеченные роллы</h2>
				<p className="baked-rolls__desc">
					Свежайшие ингредиенты, рис собственного приготовления и мастерство
					шеф-повара
				</p>
			</div>

			<div className="baked-rolls__grid">
				{JAPANESE_BAKEDS.map((item, i) => (
					<article
						key={item.id}
						className="baked-rolls__card"
						style={{ '--i': i } as React.CSSProperties}
					>
						<div className="baked-rolls__img-wrap">
							{item.image ? (
								<img
									src={item.image}
									alt={item.name}
									className="baked-rolls__img"
									loading="lazy"
								/>
							) : (
								<div className="baked-rolls__placeholder">
									<PlaceholderIcon />
								</div>
							)}
							<span className="baked-rolls__gram">{item.gram}</span>
						</div>

						<div className="baked-rolls__body">
							<h3 className="baked-rolls__name">{item.name}</h3>
							<span className="baked-rolls__price">{item.price}</span>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
)

export default BakedRolls
