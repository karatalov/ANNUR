import { CHICKEN_DISH } from '../data/CHICKEN_DISH'
import './СhickenDish.scss'

const PlaceholderIcon = () => (
	<svg
		viewBox="0 0 64 64"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
		width="52"
		height="52"
	>
		<rect x="14" y="28" width="36" height="24" rx="6" />
		<path d="M10 28h44" />
		<path d="M22 28v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
		<line x1="20" y1="22" x2="20" y2="16" />
		<line x1="32" y1="20" x2="32" y2="14" />
		<line x1="44" y1="22" x2="44" y2="16" />
		<circle cx="24" cy="38" r="2" />
		<circle cx="32" cy="36" r="2" />
		<circle cx="40" cy="38" r="2" />
	</svg>
)

const ChickenDish = () => (
	<section id="chickenDish-rolls">
		<div className="container">
			<div className="chickenDish-rolls__header">
				<p className="chickenDish-rolls__eyebrow">
					<span />
					Корейская кухня
					<span />
				</p>
				<p className="chickenDish-rolls__desc">
					Свежайшие ингредиенты, мастерство шеф-повара
				</p>
			</div>

			<div className="chickenDish-rolls__grid">
				{CHICKEN_DISH.map((item, i) => (
					<article
						key={item.id}
						className="chickenDish-rolls__card"
						style={{ '--i': i } as React.CSSProperties}
					>
						<div className="chickenDish-rolls__img-wrap">
							{item.image ? (
								<img
									src={item.image}
									alt={item.name}
									className="chickenDish-rolls__img"
									loading="lazy"
								/>
							) : (
								<div className="chickenDish-rolls__placeholder">
									<PlaceholderIcon />
								</div>
							)}
							<span className="chickenDish-rolls__gram">{item.gram}</span>
						</div>

						<div className="chickenDish-rolls__body">
							<h3 className="chickenDish-rolls__name">{item.name}</h3>
							<span className="chickenDish-rolls__price">{item.price}</span>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
)

export default ChickenDish
