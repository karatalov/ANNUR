import { HOT_SNACKS } from '../data/HOT_SNACKS'
import FOOD from '/headerImages/header.png'
import './HotSnacks.scss'
import { useEffect } from 'react'

const HotSnacks = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="hotSnacks-rolls">
			<div className="container">
				<div className="hotSnacks-rolls__header">
					<p className="hotSnacks-rolls__eyebrow">
						<span />
						Корейская кухня
						<span />
					</p>
					<h2 className="hotSnacks-rolls__title">Горячие Закуски</h2>
					<p className="hotSnacks-rolls__desc">
						Свежайшие ингредиенты, мастерство шеф-повара
					</p>
				</div>

				<div className="hotSnacks-rolls__grid">
					{HOT_SNACKS.map((item, i) => (
						<article
							key={item.id}
							className="hotSnacks-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="hotSnacks-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="hotSnacks-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="hotSnacks-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="hotSnacks-rolls__gram">{item.gram}</span>
							</div>

							<div className="hotSnacks-rolls__body">
								<h3 className="hotSnacks-rolls__name">{item.name}</h3>
								<span className="hotSnacks-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
export default HotSnacks
