import { MAIN_FOOD } from '../data/MAIN_FOOD'
import './MainFood.scss'

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

const MainFood = () => (
	<section id="mainFood-rolls">
		<div className="container">
			<div className="mainFood-rolls__header">
				<p className="mainFood-rolls__eyebrow">
					<span />
					Европейская Кухня
					<span />
				</p>
				<h2 className="mainFood-rolls__title">Второе блюдо из говядины</h2>
				<p className="mainFood-rolls__desc">
					Свежайшие ингредиенты, мастерство шеф-повара
				</p>
			</div>

			<div className="mainFood-rolls__grid">
				{MAIN_FOOD.map((item, i) => (
					<article
						key={item.id}
						className="mainFood-rolls__card"
						style={{ '--i': i } as React.CSSProperties}
					>
						<div className="mainFood-rolls__img-wrap">
							{item.image ? (
								<img
									src={item.image}
									alt={item.name}
									className="mainFood-rolls__img"
									loading="lazy"
								/>
							) : (
								<div className="mainFood-rolls__placeholder">
									<PlaceholderIcon />
								</div>
							)}
							<span className="mainFood-rolls__gram">{item.gram}</span>
						</div>

						<div className="mainFood-rolls__body">
							<h3 className="mainFood-rolls__name">{item.name}</h3>
							<span className="mainFood-rolls__price">{item.price}</span>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
)

export default MainFood
