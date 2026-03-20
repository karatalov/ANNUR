import { useNavigate } from 'react-router-dom'
import './AllFoods.scss'

const CATEGORIES = [
	{
		id: 'japanese',
		path: '/japaneseFoods',
		label: 'Японская кухня',
		sub: 'Суши, роллы, рамен и аутентичные блюда из страны восходящего солнца',
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
		id: 'korean',
		path: '/koreanFoods',
		label: 'Корейская кухня',
		sub: 'Кимчи, пибимпап, токбокки — яркие вкусы Кореи на вашем столе',
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
		id: 'european',
		path: '/europeanFoods',
		label: 'Европейская кухня',
		sub: 'Классика французской, итальянской и средиземноморской гастрономии',
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
		id: 'drinks',
		path: '/drinks',
		label: 'Напитки',
		sub: 'Авторские коктейли, вина, чаи и освежающие безалкогольные напитки',
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
		id: 'breakfast',
		path: '/breakfast',
		label: 'Завтраки',
		sub: 'Лёгкие и сытные завтраки для идеального начала вашего дня',
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
				<circle cx="32" cy="36" r="14" />
				<circle cx="32" cy="36" r="6" />
				<line x1="32" y1="14" x2="32" y2="10" />
				<line x1="46" y1="18" x2="49" y2="15" />
				<line x1="50" y1="32" x2="54" y2="32" />
				<line x1="46" y1="46" x2="49" y2="49" />
				<line x1="18" y1="18" x2="15" y2="15" />
				<line x1="14" y1="32" x2="10" y2="32" />
				<line x1="18" y1="46" x2="15" y2="49" />
			</svg>
		),
	},
	{
		id: 'Salad',
		path: '/salad',
		label: 'Салаты',
		sub: 'Лёгкие и сытные салаты для идеального начала вашего дня',
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
				<ellipse cx="32" cy="50" rx="26" ry="10" />
				<line x1="58" y1="50" x2="64" y2="44" />
				<ellipse cx="29" cy="43" rx="16" ry="9" />
				<circle cx="29" cy="40" r="6" />
				<circle cx="32" cy="22" r="8" />
				<line x1="32" y1="10" x2="32" y2="6" />
				<line x1="42" y1="13" x2="45" y2="10" />
				<line x1="46" y1="22" x2="50" y2="22" />
				<line x1="22" y1="13" x2="19" y2="10" />
				<line x1="18" y1="22" x2="14" y2="22" />
			</svg>
		),
	},
	{
		id: 'Desert',
		path: '/desert',
		label: 'Десерты',
		sub: 'Вкусные десерты для идеального начала вашего дня',
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
				<ellipse cx="32" cy="50" rx="26" ry="10" />
				<line x1="58" y1="50" x2="64" y2="44" />
				<ellipse cx="29" cy="43" rx="16" ry="9" />
				<circle cx="29" cy="40" r="6" />
				<circle cx="32" cy="22" r="8" />
				<line x1="32" y1="10" x2="32" y2="6" />
				<line x1="42" y1="13" x2="45" y2="10" />
				<line x1="46" y1="22" x2="50" y2="22" />
				<line x1="22" y1="13" x2="19" y2="10" />
				<line x1="18" y1="22" x2="14" y2="22" />
			</svg>
		),
	},
]

const AllFoods = () => {
	const navigate = useNavigate()

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
					{CATEGORIES.map((cat, i) => (
						<button
							key={cat.id}
							className="all-foods__card"
							style={{ '--i': i } as React.CSSProperties}
							onClick={() => navigate(cat.path)}
							aria-label={`Перейти: ${cat.label}`}
						>
							<div className="all-foods__card-glow" />

							<div className="all-foods__icon">{cat.icon}</div>

							<h3 className="all-foods__card-title">{cat.label}</h3>

							<p className="all-foods__card-sub">{cat.sub}</p>

							<span className="all-foods__card-arrow">
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
				<p className="all-foods__bottom-desc">
					К вашему вниманию у нас нельзя курить! Собой блюда и напитки не
					приветствуются! Покидать наш ресторан в плохом настроении! Скидки: На
					день рождения-10% или фирменный десерт от нашего заведения!
					Обслуживание О% все для вас чтоб вы были всегда рады при каждом
				</p>
			</div>
		</section>
	)
}

export default AllFoods
