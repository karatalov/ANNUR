import { JAPANESE_BAKEDS } from '../data/JAPANESE_BAKEDS'
import FOOD from '/headerImages/header.png'
import './BakedRolls.scss'
import { useEffect } from 'react'

const BakedRolls = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="baked-rolls">
			<div className="container">
				<div className="baked-rolls__header">
					<p className="baked-rolls__eyebrow">
						<span />
						Японская кухня
						<span />
					</p>
					<h2 className="baked-rolls__title">Запеченные роллы</h2>
					<p className="baked-rolls__desc">
						Свежайшие ингредиенты, рис собственного приготовления и мастерство
						шеф-повара
					</p>
				</div>

				<div className="baked-rolls__grid">
					{JAPANESE_BAKEDS.map((item, i) => (
						<article
							key={item.id}
							className="baked-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="baked-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="baked-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="baked-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="baked-rolls__gram">{item.gram}</span>
							</div>

							<div className="baked-rolls__body">
								<h3 className="baked-rolls__name">{item.name}</h3>
								<span className="baked-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default BakedRolls
