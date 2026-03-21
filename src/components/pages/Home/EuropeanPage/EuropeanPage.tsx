import { useNavigate } from 'react-router-dom'
import './EuropeanPage.scss'
import { useEffect } from 'react'

const CATEGORIES = [
	{
		id: 'europe',
		path: '/europeanFoods/pasta',
		label: 'Пасты',
		icon: (
			<svg
				viewBox="0 0 64 64"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				width="52"
				height="52"
			>
				<path d="M10 40 Q10 20 32 20 Q54 20 54 40" />
				<line x1="8" y1="40" x2="56" y2="40" />
				<line x1="8" y1="46" x2="56" y2="46" />
				<circle cx="32" cy="20" r="3" />
				<path d="M20 46v4" />
				<path d="M44 46v4" />
			</svg>
		),
	},
	{
		id: 'european',
		path: '/europeanFoods/steak',
		label: 'Стейки',
		icon: (
			<svg
				viewBox="0 0 64 64"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				width="52"
				height="52"
			>
				<path d="M10 40 Q10 20 32 20 Q54 20 54 40" />
				<line x1="8" y1="40" x2="56" y2="40" />
				<line x1="8" y1="46" x2="56" y2="46" />
				<circle cx="32" cy="20" r="3" />
				<path d="M20 46v4" />
				<path d="M44 46v4" />
			</svg>
		),
	},
	{
		id: 'european',
		path: '/europeanFoods/mainFood',
		label: 'Второе блюдо из Говядины',
		icon: (
			<svg
				viewBox="0 0 64 64"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				width="52"
				height="52"
			>
				<path d="M10 40 Q10 20 32 20 Q54 20 54 40" />
				<line x1="8" y1="40" x2="56" y2="40" />
				<line x1="8" y1="46" x2="56" y2="46" />
				<circle cx="32" cy="20" r="3" />
				<path d="M20 46v4" />
				<path d="M44 46v4" />
			</svg>
		),
	},
]

const EuropeanPage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="european-page">
			<div className="container">
				<div className="european-page__header">
					<p className="european-page__eyebrow">
						<span />
						Наше меню
						<span />
					</p>
					<h2 className="european-page__title">Выберите раздел</h2>
				</div>

				<div className="european-page__grid">
					{CATEGORIES.map((cat, i) => (
						<button
							key={cat.id}
							className="european-page__card"
							style={{ '--i': i } as React.CSSProperties}
							onClick={() => navigate(cat.path)}
							aria-label={`Перейти: ${cat.label}`}
						>
							<div className="european-page__card-glow" />
							<div className="all-foods__icon">{cat.icon}</div>

							<h3 className="european-page__card-title">{cat.label}</h3>

							<span className="european-page__card-arrow">
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
									<line x1="5" y1="12" x2="19" y2="12" />
									<polyline points="12 5 19 12 12 19" />
								</svg>
							</span>
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

export default EuropeanPage
