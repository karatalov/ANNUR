import { useEffect } from 'react'
import { PASTA } from '../data/PASTA'
import FOOD from '/headerImages/header.png'
import './Pasta.scss'

const Pasta = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="pasta-rolls">
			<div className="container">
				<div className="pasta-rolls__header">
					<p className="pasta-rolls__eyebrow">
						<span />
						Европейская Кухня
						<span />
					</p>
					<h2 className="pasta-rolls__title">Пасты</h2>
					<p className="pasta-rolls__desc">
						Свежайшие ингредиенты, мастерство шеф-повара
					</p>
				</div>

				<div className="pasta-rolls__grid">
					{PASTA.map((item, i) => (
						<article
							key={item.id}
							className="pasta-rolls__card"
							style={{ '--i': i } as React.CSSProperties}
						>
							<div className="pasta-rolls__img-wrap">
								{item.image ? (
									<img
										src={item.image}
										alt={item.name}
										className="pasta-rolls__img"
										loading="lazy"
									/>
								) : (
									<div className="pasta-rolls__placeholder">
										<img src={FOOD} alt="ANNUR" />
									</div>
								)}
								<span className="pasta-rolls__gram">{item.gram}</span>
							</div>

							<div className="pasta-rolls__body">
								<h3 className="pasta-rolls__name">{item.name}</h3>
								<span className="pasta-rolls__price">{item.price}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default Pasta
