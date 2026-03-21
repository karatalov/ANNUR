import { SOUPS } from '../data/SOUPS'
import FOOD from '/headerImages/header.png'
import './Soups.scss'
import { useEffect } from 'react'

const Soups = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="soups-rolls">
			<div className="container">
				<div className="soups-rolls__header">
					<p className="soups-rolls__eyebrow">
						<span />
						Корейская кухня
						<span />
					</p>
					<h2 className="soups-rolls__title">Супы</h2>
					<p className="soups-rolls__desc">
						Свежайшие ингредиенты, мастерство шеф-повара
					</p>
				</div>

				<div className="soups-rolls__grid">
					{SOUPS.map((item, i) => (
						<article
							key={item.id}
							className="soups-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="soups-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="soups-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="soups-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="soups-rolls__gram">{item.gram}</span>
							</div>

							<div className="soups-rolls__body">
								<h3 className="soups-rolls__name">{item.name}</h3>
								<span className="soups-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Soups
