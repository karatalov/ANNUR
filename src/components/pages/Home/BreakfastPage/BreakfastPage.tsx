import { BREAKFAST } from './data/BREAKFAST'
import { useEffect } from 'react'
import FOOD from '/headerImages/header.png'
import './BreakfastPage.scss'

const BreakfastPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
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
										<img src={FOOD} alt="ANNUR" />
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
}

export default BreakfastPage
