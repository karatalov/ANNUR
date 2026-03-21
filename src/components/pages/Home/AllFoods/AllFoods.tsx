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
				{/* Суши - нигири с рисом и рыбой сверху */}
				<ellipse cx="32" cy="42" rx="18" ry="8" />
				<path d="M14 42 Q14 34 32 34 Q50 34 50 42" />
				<ellipse cx="32" cy="34" rx="14" ry="5" fill="none" />
				{/* Палочки */}
				<line x1="20" y1="14" x2="26" y2="30" />
				<line x1="26" y1="12" x2="30" y2="30" />
				{/* Листик васаби */}
				<path d="M38 28 Q44 20 50 22 Q46 30 38 28Z" />
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
				{/* Пибимпап - миска с едой */}
				<path d="M14 36 Q14 52 32 52 Q50 52 50 36" />
				<line x1="12" y1="36" x2="52" y2="36" />
				{/* Ободок миски */}
				<ellipse cx="32" cy="36" rx="20" ry="5" />
				{/* Содержимое - кружки ингредиентов */}
				<circle cx="24" cy="30" r="4" />
				<circle cx="32" cy="28" r="4" />
				<circle cx="40" cy="30" r="4" />
				{/* Яйцо сверху */}
				<circle cx="32" cy="22" r="5" />
				<circle cx="32" cy="22" r="2" />
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
				{/* Паста - тарелка */}
				<circle cx="32" cy="38" r="18" />
				<circle cx="32" cy="38" r="13" />
				{/* Спагетти волнами */}
				<path d="M22 34 Q27 30 32 34 Q37 38 42 34" />
				<path d="M21 38 Q26 34 31 38 Q36 42 41 38" />
				<path d="M23 42 Q28 38 33 42 Q38 46 43 42" />
				{/* Вилка */}
				<line x1="52" y1="14" x2="52" y2="32" />
				<line x1="49" y1="14" x2="49" y2="22" />
				<line x1="52" y1="14" x2="55" y2="14" />
				<line x1="55" y1="14" x2="55" y2="22" />
				<path d="M49 22 Q52 26 55 22" />
			</svg>
		),
	},
	{
		id: 'drinks',
		path: '/drinks',
		label: 'Напитки',
		sub: 'Авторские коктейли, чаи и освежающие безалкогольные напитки',
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
				{/* Бокал для коктейля */}
				<path d="M16 12 L32 36 L48 12Z" />
				<line x1="32" y1="36" x2="32" y2="52" />
				<line x1="22" y1="52" x2="42" y2="52" />
				{/* Жидкость в бокале */}
				<path d="M22 24 Q32 30 42 24" />
				{/* Соломинка */}
				<line x1="38" y1="14" x2="44" y2="44" />
				{/* Долька лимона */}
				<path d="M44 20 Q50 16 52 22 Q48 26 44 20Z" />
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
				{/* Яичница на сковороде */}
				<ellipse cx="32" cy="42" rx="22" ry="10" />
				<path d="M10 42 Q10 34 32 34 Q54 34 54 42" />
				{/* Ручка сковороды */}
				<path d="M54 40 Q60 40 62 36" strokeWidth="2.5" />
				{/* Белок яйца */}
				<ellipse cx="28" cy="38" rx="10" ry="7" />
				{/* Желток */}
				<circle cx="28" cy="37" r="5" />
				<circle cx="28" cy="37" r="3" />
				{/* Кофе - чашка */}
				<path d="M42 28 Q42 22 46 22 Q50 22 50 28" />
				<line x1="40" y1="28" x2="52" y2="28" />
				<path d="M50 24 Q54 24 54 27 Q54 30 50 30" />
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
				{/* Миска для салата */}
				<path d="M10 36 Q12 54 32 54 Q52 54 54 36Z" />
				<ellipse cx="32" cy="36" rx="22" ry="6" />
				{/* Листья салата */}
				<path d="M20 30 Q18 20 26 18 Q28 26 20 30Z" />
				<path d="M32 28 Q32 16 40 16 Q40 26 32 28Z" />
				<path d="M42 30 Q46 20 52 22 Q48 30 42 30Z" />
				{/* Помидор черри */}
				<circle cx="26" cy="24" r="3" />
				{/* Огурец */}
				<ellipse cx="38" cy="24" rx="2" ry="4" />
				{/* Вилка */}
				<line x1="54" y1="12" x2="54" y2="30" />
				<line x1="51" y1="12" x2="51" y2="20" />
				<line x1="57" y1="12" x2="57" y2="20" />
				<path d="M51 20 Q54 24 57 20" />
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
				{/* Кекс/маффин - основание */}
				<path d="M20 38 Q18 52 32 52 Q46 52 44 38Z" />
				<path d="M18 38 Q20 32 32 32 Q44 32 46 38Z" />
				{/* Крем сверху (шапка) */}
				<path d="M22 32 Q22 22 32 20 Q42 22 42 32" />
				<path d="M26 24 Q26 16 32 14 Q38 16 38 24" />
				<path d="M29 16 Q30 10 32 8 Q34 10 35 16" />
				{/* Вишенка */}
				<circle cx="32" cy="8" r="3" />
				<path d="M35 8 Q40 6 42 10" />
				{/* Крапинки на маффине */}
				<circle cx="26" cy="44" r="1" />
				<circle cx="32" cy="46" r="1" />
				<circle cx="38" cy="44" r="1" />
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
					день рождения -10% или фирменный десерт от нашего заведения!
					Обслуживание О% все для вас чтоб вы были всегда рады
				</p>
			</div>
		</section>
	)
}

export default AllFoods
