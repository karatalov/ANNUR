import { useEffect, useRef } from 'react'
import { MoveUpRight } from 'lucide-react'
import { useLanguage } from '../../../../providers/useLanguage'
import './Hero.scss'

const Hero = () => {
	const { lang } = useLanguage()
	const titleRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = titleRef.current
		if (!container) return

		const els = container.querySelectorAll<HTMLElement>('[data-anim]')
		els.forEach((el, i) => {
			el.style.animationDelay = `${i * 0.15 + 0.2}s`
			el.classList.add('hero--visible')
		})
	}, [])

	const t = {
		ru: {
			top: 'Дорогие гости! Добро пожаловать в наш ресторан «ANNUR», где сочетаются три кухни мира: японская, корейская и европейская.',
			title: 'Annur (Аннур) — ресторан в Бишкеке',
			sub: 'Cuisine · Atmosphere · Excellence',
			desc: 'Каждое блюдо — история. Каждый вечер — событие. Добро пожаловать в мир гастрономии высокого уровня.',
			extra:
				'Ресторан Annur (Аннур) в Бишкеке предлагает вкусную национальную и европейскую кухню. Уютная атмосфера, быстрая доставка и качественное обслуживание.',
			menu: 'Открыть меню',
			location: 'Местоположение',
			exp: 'лет опыта',
			dishes: 'блюд в меню',
			rating: 'рейтинг',
		},
		ky: {
			top: 'Урматтуу коноктор! «ANNUR» ресторанына кош келиңиздер. Бул жерде жапон, корей жана европа ашканалары айкалышкан.',
			title: 'Annur (Аннур) — Бишкектеги ресторан',
			sub: 'Даам · Атмосфера · Сапат',
			desc: 'Ар бир тамак — бул тарых. Ар бир кеч — өзгөчө окуя. Жогорку деңгээлдеги гастрономия дүйнөсүнө кош келиңиз.',
			extra:
				'Annur (Аннур) рестораны Бишкекте улуттук жана европалык даамдуу тамактарды сунуштайт. Жагымдуу атмосфера, тез жеткирүү жана сапаттуу тейлөө.',
			menu: 'Менюну ачуу',
			location: 'Жайгашкан жери',
			exp: 'жыл тажрыйба',
			dishes: 'менюдагы тамактар',
			rating: 'баа',
		},
	}

	return (
		<section id="hero">
			<div className="hero__overlay" />
			<div className="hero__vignette" />

			<div className="hero__line hero__line--left" />
			<div className="hero__line hero__line--right" />

			<div className="container">
				<div className="hero" ref={titleRef}>
					<p className="hero__eyebrow" data-anim>
						<span className="hero__eyebrow-dash" />
						{t[lang].top}
						<span className="hero__eyebrow-dash" />
					</p>

					<h1 className="hero__heading" data-anim>
						{t[lang].title.split('Annur')[0]}
						<em>Annur</em>
						{t[lang].title.split('Annur')[1]}
					</h1>

					<p className="hero__sub" data-anim>
						{t[lang].sub}
					</p>

					<div className="hero__ornament" data-anim>
						<span />◈<span />
					</div>

					<div className="hero__desc" data-anim>
						<p>{t[lang].desc}</p>
						<p>{t[lang].extra}</p>
					</div>

					<div className="hero__btns" data-anim>
						<a href="#all-foods" className="hero__btn hero__btn--primary">
							{t[lang].menu} <MoveUpRight size={18} />
						</a>
						<a href="#footer" className="hero__btn hero__btn--outline">
							{t[lang].location} <MoveUpRight size={18} />
						</a>
					</div>

					<div className="hero__stats" data-anim>
						<div className="hero__stat">
							<span className="hero__stat-num">1+</span>
							<span className="hero__stat-label">{t[lang].exp}</span>
						</div>

						<div className="hero__stat-divider" />

						<div className="hero__stat">
							<span className="hero__stat-num">120+</span>
							<span className="hero__stat-label">{t[lang].dishes}</span>
						</div>

						<div className="hero__stat-divider" />

						<div className="hero__stat">
							<span className="hero__stat-num">5.0★</span>
							<span className="hero__stat-label">{t[lang].rating}</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
