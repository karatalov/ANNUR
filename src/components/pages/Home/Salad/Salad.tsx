import { useEffect } from 'react'
import { SALAD } from './data/SALAD'
import FOOD from '/headerImages/header.png'
import './Salad.scss'

const Salad = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="salad-rolls">
			<div className="container">
				<div className="salad-rolls__header">
					<p className="salad-rolls__eyebrow">
						<span />
						Салаты
						<span />
					</p>
					<h2 className="salad-rolls__title">Салаты</h2>
					<p className="salad-rolls__desc">
						Свежайшие ингредиенты, мастерство шеф-повара
					</p>
				</div>

				<div className="salad-rolls__grid">
					{SALAD.map((item, i) => (
						<article
							key={item.id}
							className="salad-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="salad-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="salad-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="salad-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="salad-rolls__gram">{item.gram}</span>
							</div>

							<div className="salad-rolls__body">
								<h3 className="salad-rolls__name">{item.name}</h3>
								<span className="salad-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Salad
