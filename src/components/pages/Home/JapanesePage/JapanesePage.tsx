import { useNavigate } from 'react-router-dom'
import './JapanesePage.scss'
import { useEffect } from 'react'

const CATEGORIES = [
	{
		id: 'japanese',
		path: '/japaneseFoods/coldRolls',
		label: 'Холодные роллы',
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
				<ellipse cx="32" cy="44" rx="20" ry="8" />
				<path d="M12 44 Q32 28 52 44" />
				<line x1="22" y1="14" x2="28" y2="38" />
				<line x1="36" y1="12" x2="42" y2="38" />
				<circle cx="32" cy="44" r="4" />
			</svg>
		),
	},
	{
		id: 'japanese',
		path: '/japaneseFoods/hotRolls',
		label: 'Горячие роллы',
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
				<ellipse cx="32" cy="44" rx="20" ry="8" />
				<path d="M12 44 Q32 28 52 44" />
				<line x1="22" y1="14" x2="28" y2="38" />
				<line x1="36" y1="12" x2="42" y2="38" />
				<circle cx="32" cy="44" r="4" />
			</svg>
		),
	},
	{
		id: 'japanese',
		path: '/japaneseFoods/bakedRolls',
		label: 'Запечённые роллы',
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
				<ellipse cx="32" cy="44" rx="20" ry="8" />
				<path d="M12 44 Q32 28 52 44" />
				<line x1="22" y1="14" x2="28" y2="38" />
				<line x1="36" y1="12" x2="42" y2="38" />
				<circle cx="32" cy="44" r="4" />
			</svg>
		),
	},
	{
		id: 'japanese',
		path: '/japaneseFoods/setsRolls',
		label: 'Сеты',
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
				<ellipse cx="32" cy="44" rx="20" ry="8" />
				<path d="M12 44 Q32 28 52 44" />
				<line x1="22" y1="14" x2="28" y2="38" />
				<line x1="36" y1="12" x2="42" y2="38" />
				<circle cx="32" cy="44" r="4" />
			</svg>
		),
	},
]

const JapanesePage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<section id="japanese-page">
			<div className="container">
				<div className="japanese-page__header">
					<p className="japanese-page__eyebrow">
						<span />
						Наше меню
						<span />
					</p>
					<h2 className="japanese-page__title">Выберите раздел</h2>
				</div>

				<div className="japanese-page__grid">
					{CATEGORIES.map((cat, i) => (
						<button
							key={cat.id}
							className="japanese-page__card"
							style={{ '--i': i } as React.CSSProperties}
							onClick={() => navigate(cat.path)}
							aria-label={`Перейти: ${cat.label}`}
						>
							<div className="japanese-page__card-glow" />
							<div className="all-foods__icon">{cat.icon}</div>

							<h3 className="japanese-page__card-title">{cat.label}</h3>

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

export default JapanesePage
