import { CHICKEN_DISH } from '../data/CHICKEN_DISH'
import { useEffect } from 'react'
import FOOD from '/headerImages/header.png'
import './СhickenDish.scss'

const ChickenDish = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="chickenDish-rolls">
			<div className="container">
				<div className="chickenDish-rolls__header">
					<p className="chickenDish-rolls__eyebrow">
						<span />
						Корейская кухня
						<span />
					</p>
					<h2 className="chickenDish-rolls__title">Куриные Блюда</h2>
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
										<img src={FOOD} alt="ANNUR" />
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
}
export default ChickenDish
