import { useEffect } from 'react'
import { STEAK } from '../data/STEAK'
import FOOD from '/headerImages/header.png'
import './Steak.scss'

const Steak = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="steak-rolls">
			<div className="container">
				<div className="steak-rolls__header">
					<p className="steak-rolls__eyebrow">
						<span />
						Европейская Кухня
						<span />
					</p>
					<h2 className="steak-rolls__title">Стейки</h2>
					<p className="steak-rolls__desc">
						Свежайшие ингредиенты, мастерство шеф-повара
					</p>
				</div>

				<div className="steak-rolls__grid">
					{STEAK.map((item, i) => (
						<article
							key={item.id}
							className="steak-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="steak-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="steak-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="steak-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="steak-rolls__gram">{item.gram}</span>
							</div>

							<div className="steak-rolls__body">
								<h3 className="steak-rolls__name">{item.name}</h3>
								<span className="steak-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Steak
