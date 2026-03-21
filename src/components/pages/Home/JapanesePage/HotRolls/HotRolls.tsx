import { useEffect } from 'react'
import { JAPANESE_HOTS } from '../data/JAPANESE_HOTS'
import FOOD from '/headerImages/header.png'
import './HotRolls.scss'

const HotRolls = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="hot-rolls">
			<div className="container">
				<div className="hot-rolls__header">
					<p className="hot-rolls__eyebrow">
						<span />
						Японская кухня
						<span />
					</p>
					<h2 className="hot-rolls__title">Горячие роллы</h2>
					<p className="hot-rolls__desc">
						Свежайшие ингредиенты, рис собственного приготовления и мастерство
						шеф-повара
					</p>
				</div>

				<div className="hot-rolls__grid">
					{JAPANESE_HOTS.map((item, i) => (
						<article
							key={item.id}
							className="hot-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="hot-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="hot-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="hot-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="hot-rolls__gram">{item.gram}</span>
							</div>

							<div className="hot-rolls__body">
								<h3 className="hot-rolls__name">{item.name}</h3>
								<span className="hot-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default HotRolls
