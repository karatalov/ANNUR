import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../../../../providers/useLanguage'
import './Category.scss'
import {
	getSubCategories,
	type SubCategory,
} from '../../../../entities/subCategories/api/subCategoriesApi'

const Category = () => {
	const navigate = useNavigate()
	const { id } = useParams()
	const { lang } = useLanguage()
	const [loading, setLoading] = useState(true)
	const [subs, setSubs] = useState<SubCategory[]>([])

	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			try {
				setLoading(true)
				const res = await getSubCategories(Number(id), lang)
				setSubs(res.subcategories)
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
		window.scrollTo(0, 0)
	}, [id, lang])

	if (loading)
		return (
			<section id="japanese-page">
				<div className="japanese-page__loader">
					<div className="japanese-page__spinner" />
				</div>
			</section>
		)

	if (subs.length === 0)
		return (
			<section id="japanese-page">
				<div className="container">
					<p className="japanese-page__empty">
						{lang === 'ru' ? 'Нет подкатегорий' : 'Бөлүмдөр жок'}
					</p>
				</div>
			</section>
		)

	return (
		<section id="japanese-page">
			<div className="japanese-page__orb japanese-page__orb--1" />
			<div className="japanese-page__orb japanese-page__orb--2" />

			<div className="container">
				<header className="japanese-page__header">
					<p className="japanese-page__eyebrow">
						<span />
						ANNUR
						<span />
					</p>
					<h2 className="japanese-page__title">
						{lang === 'ru' ? 'Выберите раздел' : 'Бөлүм тандаңыз'}
					</h2>
				</header>

				<div className="japanese-page__grid">
					{subs.map((sub, i) => (
						<div
							key={sub.id}
							className="japanese-page__card"
							style={{ '--i': i } as React.CSSProperties}
							onClick={() => navigate(`/subcategory/${sub.id}`)}
						>
							<div className="japanese-page__card-glow" />

							<div className="japanese-page__card-img-wrap">
								<img
									src={sub.subimage}
									alt={sub.name}
									className="japanese-page__card-img"
								/>
								<div className="japanese-page__card-img-overlay" />
							</div>

							<div className="japanese-page__card-body">
								<h3 className="japanese-page__card-title">{sub.name}</h3>
								{sub.description && (
									<p className="japanese-page__card-sub">{sub.description}</p>
								)}
							</div>

							<div className="japanese-page__card-footer">
								<span className="japanese-page__card-cta">
									{lang === 'ru' ? 'Смотреть' : 'Көрүү'}
								</span>
								<span className="japanese-page__card-arrow">
									<svg
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M5 12h14M12 5l7 7-7 7" />
									</svg>
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Category
