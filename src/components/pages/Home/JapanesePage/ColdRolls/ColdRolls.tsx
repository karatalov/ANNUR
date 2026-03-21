import { useEffect } from 'react'
import { JAPANESE_COLDS } from '../data/JAPANESE_COLDS'
import FOOD from '/headerImages/header.png'
import './ColdRolls.scss'

const ColdRolls = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="cold-rolls">
			<div className="container">
				<div className="cold-rolls__header">
					<p className="cold-rolls__eyebrow">
						<span />
						Японская кухня
						<span />
					</p>
					<h2 className="cold-rolls__title">Холодные роллы</h2>
					<p className="cold-rolls__desc">
						Свежайшие ингредиенты, рис собственного приготовления и мастерство
						шеф-повара
					</p>
				</div>

				<div className="cold-rolls__grid">
					{JAPANESE_COLDS.map((item, i) => (
						<article
							key={item.id}
							className="cold-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="cold-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="cold-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="cold-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="cold-rolls__gram">{item.gram}</span>
							</div>

							<div className="cold-rolls__body">
								<h3 className="cold-rolls__name">{item.name}</h3>
								<span className="cold-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default ColdRolls
