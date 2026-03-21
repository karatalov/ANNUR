import { useEffect } from 'react'
import { KIMBAP } from '../data/KIMBAP'
import FOOD from '/headerImages/header.png'
import './Kimbap.scss'

const Kimbap = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="kimbap-rolls">
			<div className="container">
				<div className="kimbap-rolls__header">
					<p className="kimbap-rolls__eyebrow">
						<span />
						Корейская кухня
						<span />
					</p>
					<h2 className="kimbap-rolls__title">Кимбап</h2>
					<p className="kimbap-rolls__desc">
						Свежайшие ингредиенты, мастерство шеф-повара
					</p>
				</div>

				<div className="kimbap-rolls__grid">
					{KIMBAP.map((item, i) => (
						<article
							key={item.id}
							className="kimbap-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="kimbap-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="kimbap-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="kimbap-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="kimbap-rolls__gram">{item.gram}</span>
							</div>

							<div className="kimbap-rolls__body">
								<h3 className="kimbap-rolls__name">{item.name}</h3>
								<span className="kimbap-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
export default Kimbap
