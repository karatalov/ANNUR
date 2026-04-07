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

	const [categories, setCategories] = useState<Category[]>([])
	const [loading, setLoading] = useState(true)
	console.log(categories)

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
						Наше меню
						<span />
					</p>
					<h2 className="all-foods__title">Выберите раздел</h2>
				</div>

				<div className="all-foods__grid">
					{loading ? (
						<p>Загрузка...</p>
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
										style={{
											borderRadius: '50%',
										}}
									/>
								</div>

								<h3 className="all-foods__card-title">{cat.category_name}</h3>

								<p className="all-foods__card-sub">{cat.description}</p>
							</button>
						))
					)}
				</div>
			</div>
		</section>
	)
}

export default Foods
