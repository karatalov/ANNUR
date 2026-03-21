import { useNavigate } from 'react-router-dom'
import './DrinksPage.scss'
import { useEffect } from 'react'

const CATEGORIES = [
	{
		id: 'drinks',
		path: '/drinks/coffee',
		label: 'Кофе',
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
				<path d="M20 12 Q14 26 20 36 Q26 44 32 44 Q38 44 44 36 Q50 26 44 12Z" />
				<line x1="32" y1="44" x2="32" y2="54" />
				<line x1="22" y1="54" x2="42" y2="54" />
				<path d="M18 26 Q25 28 32 26 Q39 24 46 26" />
			</svg>
		),
	},
	{
		id: 'drinks',
		path: '/drinks/tea',
		label: 'Чай',
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
				<path d="M20 12 Q14 26 20 36 Q26 44 32 44 Q38 44 44 36 Q50 26 44 12Z" />
				<line x1="32" y1="44" x2="32" y2="54" />
				<line x1="22" y1="54" x2="42" y2="54" />
				<path d="M18 26 Q25 28 32 26 Q39 24 46 26" />
			</svg>
		),
	},
	{
		id: 'drinks',
		path: '/drinks/limonad',
		label: 'Прохладные напитки',
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
				<path d="M20 12 Q14 26 20 36 Q26 44 32 44 Q38 44 44 36 Q50 26 44 12Z" />
				<line x1="32" y1="44" x2="32" y2="54" />
				<line x1="22" y1="54" x2="42" y2="54" />
				<path d="M18 26 Q25 28 32 26 Q39 24 46 26" />
			</svg>
		),
	},
	{
		id: 'drinks',
		path: '/drinks/kokteil',
		label: 'Коктейль',
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
				<path d="M20 12 Q14 26 20 36 Q26 44 32 44 Q38 44 44 36 Q50 26 44 12Z" />
				<line x1="32" y1="44" x2="32" y2="54" />
				<line x1="22" y1="54" x2="42" y2="54" />
				<path d="M18 26 Q25 28 32 26 Q39 24 46 26" />
			</svg>
		),
	},
]

const Drinks = () => {
	const navigate = useNavigate()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="drinks-page">
			<div className="container">
				<div className="drinks-page__header">
					<p className="drinks-page__eyebrow">
						<span />
						Наше меню
						<span />
					</p>
					<h2 className="drinks-page__title">Выберите раздел</h2>
				</div>

				<div className="drinks-page__grid">
					{CATEGORIES.map((cat, i) => (
						<button
							key={cat.id}
							className="drinks-page__card"
							style={{ '--i': i } as React.CSSProperties}
							onClick={() => navigate(cat.path)}
							aria-label={`Перейти: ${cat.label}`}
						>
							<div className="drinks-page__card-glow" />
							<div className="all-foods__icon">{cat.icon}</div>

							<h3 className="drinks-page__card-title">{cat.label}</h3>

							<span className="drinks-page__card-arrow">
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

export default Drinks
