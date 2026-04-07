import { getAboutList, type About } from '../../../entities/about/api/aboutApi'
import { useEffect, useState } from 'react'
import { useLanguage } from '../../../providers/useLanguage'
import './AboutPage.scss'

const AboutPage = () => {
	const [data, setData] = useState<About[]>([])
	const [loading, setLoading] = useState(true)
	const { lang } = useLanguage()

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const res = await getAboutList(lang)
				setData(res)
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
		window.scrollTo(0, 0)
	}, [lang])

	return (
		<div className="about-page">
			<header className="about-page__header">
				<div className="container">
					<h1 className="about-page__title">
						{lang === 'ru' ? 'О Нас' : 'Биз жөнүндө'}
					</h1>
				</div>
			</header>

			<main className="about-page__content">
				{loading ? (
					<div className="loader">
						<div className="loader__spinner" />
						<p>{lang === 'ru' ? 'Загрузка...' : 'Жүктөлүүдө...'}</p>
					</div>
				) : (
					<div className="about-sections">
						{data.map((item, index) => {
							const hasImages = item.cafe_images && item.cafe_images.length > 0
							const multiImage = hasImages && item.cafe_images!.length > 1

							return (
								<article
									key={item.id}
									className={`about-card ${!hasImages ? 'about-card--no-image' : ''}`}
									style={{ animationDelay: `${index * 0.12}s` }}
								>
									{hasImages && (
										<div
											className={`about-card__media ${
												multiImage
													? 'about-card__media--multi'
													: 'about-card__media--single'
											}`}
										>
											{item
												.cafe_images!.slice(0, multiImage ? 3 : 1)
												.map((img) => (
													<div key={img.id} className="gallery-item">
														<img
															src={img.cafe_image}
															alt={item.information}
															className="gallery-item__image"
														/>
													</div>
												))}
										</div>
									)}

									<div className="about-card__body">
										<span className="about-card__eyebrow">ANNUR</span>
										<h2 className="about-card__title">{item.information}</h2>
										<div className="about-card__description">
											<p>{item.description}</p>
										</div>
									</div>
								</article>
							)
						})}
					</div>
				)}

				{!loading && data.length === 0 && (
					<div className="empty-state">
						<p>{lang === 'ru' ? 'Информация отсутствует' : 'Маалымат жок'}</p>
					</div>
				)}
			</main>
		</div>
	)
}

export default AboutPage
