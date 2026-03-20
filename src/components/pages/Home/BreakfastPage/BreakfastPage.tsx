import { BREAKFAST } from './data/BREAKFAST'
import './BreakfastPage.scss'

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

const Breakfast = () => (
	<section id="breakfast-rolls">
		<div className="container">
			<div className="breakfast-rolls__header">
				<p className="breakfast-rolls__eyebrow">
					<span />
					Завтрак
					<span />
				</p>
				<h2 className="breakfast-rolls__title">Завтрак</h2>
				<p className="breakfast-rolls__desc">
					Свежайшие ингредиенты, мастерство шеф-повара
				</p>
			</div>

			<div className="breakfast-rolls__grid">
				{BREAKFAST.map((item, i) => (
					<article
						key={item.id}
						className="breakfast-rolls__card"
						style={{ '--i': i } as React.CSSProperties}
					>
						<div className="breakfast-rolls__img-wrap">
							{item.image ? (
								<img
									src={item.image}
									alt={item.name}
									className="breakfast-rolls__img"
									loading="lazy"
								/>
							) : (
								<div className="breakfast-rolls__placeholder">
									<PlaceholderIcon />
								</div>
							)}
							<span className="breakfast-rolls__gram">{item.gram}</span>
						</div>

						<div className="breakfast-rolls__body">
							<h3 className="breakfast-rolls__name">{item.name}</h3>
							<span className="breakfast-rolls__price">{item.price}</span>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
)

export default Breakfast
