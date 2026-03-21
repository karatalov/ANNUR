import { JAPANESE_SETS } from '../data/JAPANESE_SETS'
import { useEffect } from 'react'
import FOOD from '/headerImages/header.png'
import './SetRolls.scss'

const SetRolls = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
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
										<img src={FOOD} alt="ANNUR" />
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
}
export default SetRolls
