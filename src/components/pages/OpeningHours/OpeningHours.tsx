import { useEffect, useState } from 'react'
import { useLanguage } from '../../../providers/useLanguage'
import {
	getOpeningHours,
	type OpeningHour,
} from '../../../entities/openingHours/api/openingHoursApi'
import './OpeningHours.scss'

const DAY_FULL = {
	ru: {
		ПН: 'Понедельник',
		ВТ: 'Вторник',
		СР: 'Среда',
		ЧТ: 'Четверг',
		ПТ: 'Пятница',
		СБ: 'Суббота',
		ВС: 'Воскресенье',
	},
	ky: {
		ПН: 'Дүйшөмбү',
		ВТ: 'Шейшемби',
		СР: 'Шаршемби',
		ЧТ: 'Бейшемби',
		ПТ: 'Жума',
		СБ: 'Ишемби',
		ВС: 'Жекшемби',
	},
}

const DAY_INDEX: Record<string, number> = {
	ВС: 0,
	ПН: 1,
	ВТ: 2,
	СР: 3,
	ЧТ: 4,
	ПТ: 5,
	СБ: 6,
}

const OpeningHours = () => {
	const { lang } = useLanguage()
	const [hours, setHours] = useState<OpeningHour[]>([])
	const [loading, setLoading] = useState(true)

	const todayIndex = new Date().getDay()

	const t = {
		ru: {
			title: 'ВРЕМЯ РАБОТЫ',
			today: 'Сегодня',
			closed: 'Выходной',
			loading: 'Загрузка...',
		},
		ky: {
			title: 'ИШ УБАКТЫСЫ',
			today: 'Бүгүн',
			closed: 'Жабык',
			loading: 'Жүктөлүүдө...',
		},
	}

	useEffect(() => {
		const fetchHours = async () => {
			try {
				setLoading(true)
				const data = await getOpeningHours(lang)
				setHours(data)
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		fetchHours()
	}, [lang])

	if (loading)
		return (
			<div className="oh-wrap">
				<div className="oh-loading">{t[lang].loading}</div>
			</div>
		)

	const cards = hours.flatMap((h) =>
		(h.work_day as string[]).map((day: string) => ({
			key: `${h.id}-${day}`,
			day,
			description: h.description,
			dayIndex: DAY_INDEX[day] ?? -1,
		})),
	)

	return (
		<div className="oh-wrap">
			<h2 className="oh-title">{t[lang].title}</h2>

			<div className="oh-divider">
				<span className="oh-line" />
				<span className="oh-diamond" />
				<span className="oh-line" />
			</div>

			<div className="oh-grid">
				{cards.map((c, i) => {
					const isToday = c.dayIndex === todayIndex

					const isClosed =
						c.description === 'Выходной' || c.description === 'Жабык'

					return (
						<div
							key={c.key}
							className={`oh-card ${isToday ? 'oh-card--today' : ''}`}
							style={{ animationDelay: `${i * 0.06}s` }}
						>
							{isToday && (
								<div className="oh-badge">
									<span className="oh-dot oh-dot--open" />
									{t[lang].today}
								</div>
							)}

							<p className="oh-day">
								{DAY_FULL[lang][c.day as keyof (typeof DAY_FULL)['ru']] ??
									c.day}
							</p>

							{isClosed ? (
								<p className="oh-closed">
									<span className="oh-dot oh-dot--closed" />
									{t[lang].closed}
								</p>
							) : (
								<p className="oh-time">10:00 – 00:00</p>
							)}
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default OpeningHours
