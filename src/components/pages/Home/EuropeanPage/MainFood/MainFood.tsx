import { useEffect } from 'react'
import { MAIN_FOOD } from '../data/MAIN_FOOD'
import FOOD from '/headerImages/header.png'
import './MainFood.scss'

const MainFood = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
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
										<img src={FOOD} alt="ANNUR" />
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
}

export default MainFood
