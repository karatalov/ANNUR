import { JAPANESE_SETS } from '../data/JAPANESE_SETS'
import './SetRolls.scss'

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

const SetRolls = () => (
	<section id="set-rolls">
		<div className="container">
			<div className="set-rolls__header">
				<p className="set-rolls__eyebrow">
					<span />
					Японская кухня
					<span />
				</p>
				<h2 className="set-rolls__title">Сеты</h2>
				<p className="set-rolls__desc">
					Свежайшие ингредиенты, рис собственного приготовления и мастерство
					шеф-повара
				</p>
			</div>

			<div className="set-rolls__grid">
				{JAPANESE_SETS.map((item, i) => (
					<article
						key={item.id}
						className="set-rolls__card"
						style={{ '--i': i } as React.CSSProperties}
					>
						<div className="set-rolls__img-wrap">
							{item.image ? (
								<img
									src={item.image}
									alt={item.name}
									className="set-rolls__img"
									loading="lazy"
								/>
							) : (
								<div className="set-rolls__placeholder">
									<PlaceholderIcon />
								</div>
							)}
							<span className="set-rolls__gram">{item.gram}</span>
						</div>

						<div className="set-rolls__body">
							<h3 className="set-rolls__name">{item.name}</h3>
							<span className="set-rolls__price">{item.price}</span>
						</div>
							<p className="set-rolls__rolls">{item.rolls}</p>
					</article>
				))}
			</div>
		</div>
	</section>
)

export default SetRolls
