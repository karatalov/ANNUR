import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	getCategories,
	type Category,
} from '../../../../entities/categories/api/categoriesApi'
import './Foods.scss'
import { useLanguage } from '../../../../providers/useLanguage'

const Foods = () => {
	const navigate = useNavigate()
	const { lang } = useLanguage()

	const translations = {
		ru: {
			menu: 'Наше меню',
			choose: 'Выберите раздел',
			loading: 'Загрузка...',
			drinks: {
				title: 'Напитки',
				desc: 'Авторские коктейли, чаи и освежающие безалкогольные напитки',
			},
			desserts: {
				title: 'Десерты',
				desc: 'Вкусные десерты для идеального завершения вашего дня',
			},
		},
		ky: {
			menu: 'Биздин меню',
			choose: 'Бөлүмдү тандаңыз',
			loading: 'Жүктөлүүдө...',
			drinks: {
				title: 'Суусундуктар',
				desc: 'Автордук коктейлдер, чайлар жана сергитүүчү суусундуктар',
			},
			desserts: {
				title: 'Таттуулар',
				desc: 'Күндү сонун жыйынтыктоо үчүн даамдуу таттуулар',
			},
		},
	}

	const t = translations[lang] || translations.ru

	const [categories, setCategories] = useState<Category[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getCategories(lang)
				setCategories(res)
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [lang])

	return (
		<section id="all-foods">
			<div className="container">
				<div className="all-foods__header">
					<p className="all-foods__eyebrow">
						<span />
						{t.menu}
						<span />
					</p>
					<h2 className="all-foods__title">{t.choose}</h2>
				</div>

				<div className="all-foods__grid">
					{loading ? (
						<p>{t.loading}</p>
					) : (
						categories.map((cat, i) => (
							<button
								key={cat.id}
								className="all-foods__card"
								style={{ '--i': i } as React.CSSProperties}
								onClick={() => navigate(`/category/${cat.id}`)}
							>
								<div className="all-foods__card-glow" />

								<div className="all-foods__icon">
									<img
										src={cat.category_icon}
										alt={cat.category_name}
										width={64}
										height={64}
										style={{ borderRadius: '50%' }}
									/>
								</div>

								<h3 className="all-foods__card-title">{cat.category_name}</h3>

								<p className="all-foods__card-sub">{cat.description}</p>
							</button>
						))
					)}

					{/* DRINKS */}
					<button
						className="all-foods__card"
						onClick={() => navigate('/drinks')}
					>
						<div className="all-foods__card-glow" />

						<div className="all-foods__icon">
							<img
								src="/drink.jpg"
								alt={t.drinks.title}
								width={64}
								height={64}
								style={{ borderRadius: '50%' }}
							/>
						</div>

						<h3 className="all-foods__card-title">{t.drinks.title}</h3>

						<p className="all-foods__card-sub">{t.drinks.desc}</p>
					</button>

					{/* DESSERTS */}
					<button
						className="all-foods__card"
						onClick={() => navigate('/Desserts')}
					>
						<div className="all-foods__card-glow" />

						<div className="all-foods__icon">
							<img
								src="/desert.jpg"
								alt={t.desserts.title}
								width={64}
								height={64}
								style={{ borderRadius: '50%' }}
							/>
						</div>

						<h3 className="all-foods__card-title">{t.desserts.title}</h3>

						<p className="all-foods__card-sub">{t.desserts.desc}</p>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Foods
