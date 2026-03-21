import { useEffect } from 'react'
import { TOKBOKI } from '../data/TOKBOKI'
import FOOD from '/headerImages/header.png'
import './Tokboki.scss'

const Tokboki = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="tokboki-rolls">
			<div className="container">
				<div className="tokboki-rolls__header">
					<p className="tokboki-rolls__eyebrow">
						<span />
						Корейская кухня
						<span />
					</p>
					<h2 className="tokboki-rolls__title">Токбоки</h2>
					<p className="tokboki-rolls__desc">
						Свежайшие ингредиенты, мастерство шеф-повара
					</p>
				</div>

				<div className="tokboki-rolls__grid">
					{TOKBOKI.map((item, i) => (
						<article
							key={item.id}
							className="tokboki-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="tokboki-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="tokboki-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="tokboki-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="tokboki-rolls__gram">{item.gram}</span>
							</div>

							<div className="tokboki-rolls__body">
								<h3 className="tokboki-rolls__name">{item.name}</h3>
								<span className="tokboki-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Tokboki
