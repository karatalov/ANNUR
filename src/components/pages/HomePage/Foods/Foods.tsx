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

	const title = lang === 'ky' ? 'Суусундуктар' : 'Напитки'
	const desc =
		lang === 'ky'
			? 'Автордук коктейлдер, чайлар жана сергитүүчү суусундуктар'
			: 'Авторские коктейли, чаи и освежающие безалкогольные напитки'
	const [categories, setCategories] = useState<Category[]>([])
	const [loading, setLoading] = useState(true)

	const t = {
		ru: {
			menu: 'Наше меню',
			choose: 'Выберите раздел',
			loading: 'Загрузка...',
		},
		ky: {
			menu: 'Биздин меню',
			choose: 'Бөлүмдү тандаңыз',
			loading: 'Жүктөлүүдө...',
		},
	}

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
						{t[lang].menu}
						<span />
					</p>
					<h2 className="all-foods__title">{t[lang].choose}</h2>
				</div>

				<div className="all-foods__grid">
					{loading ? (
						<p>{t[lang].loading}</p>
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
					<button
						className="all-foods__card"
						onClick={() => navigate('/Drinks')}
					>
						<div className="all-foods__card-glow" />

						<div className="all-foods__icon">
							<img
								src="/drink.jpg"
								alt={title}
								width={64}
								height={64}
								style={{ borderRadius: '50%' }}
							/>
						</div>

						<h3 className="all-foods__card-title">{title}</h3>

						<p className="all-foods__card-sub">{desc}</p>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Foods
