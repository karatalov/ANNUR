import { useNavigate } from 'react-router-dom'
import './KoreanPage.scss'
import { useEffect } from 'react'

const CATEGORIES = [
	{
		id: 'korean',
		path: '/koreanFoods/tokboki',
		label: 'Токпоки',
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
				<rect x="14" y="28" width="36" height="24" rx="6" />
				<path d="M10 28h44" />
				<path d="M22 28v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
				<line x1="20" y1="22" x2="20" y2="16" />
				<line x1="32" y1="20" x2="32" y2="14" />
				<line x1="44" y1="22" x2="44" y2="16" />
				<circle cx="24" cy="38" r="2" />
				<circle cx="32" cy="36" r="2" />
				<circle cx="40" cy="38" r="2" />
			</svg>
		),
	},
	{
		id: 'korean',
		path: '/koreanFoods/kimbap',
		label: 'Кимбап',
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
				<rect x="14" y="28" width="36" height="24" rx="6" />
				<path d="M10 28h44" />
				<path d="M22 28v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
				<line x1="20" y1="22" x2="20" y2="16" />
				<line x1="32" y1="20" x2="32" y2="14" />
				<line x1="44" y1="22" x2="44" y2="16" />
				<circle cx="24" cy="38" r="2" />
				<circle cx="32" cy="36" r="2" />
				<circle cx="40" cy="38" r="2" />
			</svg>
		),
	},
	{
		id: 'korean',
		path: '/koreanFoods/chickenDish',
		label: 'Куриное Блюдо',
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
				<rect x="14" y="28" width="36" height="24" rx="6" />
				<path d="M10 28h44" />
				<path d="M22 28v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
				<line x1="20" y1="22" x2="20" y2="16" />
				<line x1="32" y1="20" x2="32" y2="14" />
				<line x1="44" y1="22" x2="44" y2="16" />
				<circle cx="24" cy="38" r="2" />
				<circle cx="32" cy="36" r="2" />
				<circle cx="40" cy="38" r="2" />
			</svg>
		),
	},
	{
		id: 'korean',
		path: '/koreanFoods/hotSnacks',
		label: 'Горячие Закуски',
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
				<rect x="14" y="28" width="36" height="24" rx="6" />
				<path d="M10 28h44" />
				<path d="M22 28v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
				<line x1="20" y1="22" x2="20" y2="16" />
				<line x1="32" y1="20" x2="32" y2="14" />
				<line x1="44" y1="22" x2="44" y2="16" />
				<circle cx="24" cy="38" r="2" />
				<circle cx="32" cy="36" r="2" />
				<circle cx="40" cy="38" r="2" />
			</svg>
		),
	},
	{
		id: 'korean',
		path: '/koreanFoods/soups',
		label: 'Супы',
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
				<rect x="14" y="28" width="36" height="24" rx="6" />
				<path d="M10 28h44" />
				<path d="M22 28v-6a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v6" />
				<line x1="20" y1="22" x2="20" y2="16" />
				<line x1="32" y1="20" x2="32" y2="14" />
				<line x1="44" y1="22" x2="44" y2="16" />
				<circle cx="24" cy="38" r="2" />
				<circle cx="32" cy="36" r="2" />
				<circle cx="40" cy="38" r="2" />
			</svg>
		),
	},
]

const KoreanPage = () => {
	const navigate = useNavigate()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="korean-page">
			<div className="container">
				<div className="korean-page__header">
					<p className="korean-page__eyebrow">
						<span />
						Наше меню
						<span />
					</p>

					<h2 className="korean-page__title">Выберите раздел</h2>
				</div>

				<div className="korean-page__grid">
					{CATEGORIES.map((cat, i) => (
						<button
							key={cat.id}
							className="korean-page__card"
							style={{ '--i': i } as React.CSSProperties}
							onClick={() => navigate(cat.path)}
							aria-label={`Перейти: ${cat.label}`}
						>
							<div className="korean-page__card-glow" />
							<div className="all-foods__icon">{cat.icon}</div>

							<h3 className="korean-page__card-title">{cat.label}</h3>

							<span className="korean-page__card-arrow">
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

export default KoreanPage
