import { useEffect, useRef } from 'react'
import { MoveUpRight } from 'lucide-react'
import './Hero.scss'

const Hero = () => {
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
						Дорогие гости! Добро пожаловать в наш ресторан «АNNUR» где
						сочетается три кухни мира: Японской, Корейской и Европейской кухней
						<span className="hero__eyebrow-dash" />
					</p>

					<h1 className="hero__heading" data-anim>
						RESTORAN <em>ANNUR</em>
					</h1>

					<p className="hero__sub" data-anim>
						Cuisine · Atmosphere · Excellence
					</p>

					<div className="hero__ornament" data-anim>
						<span />◈<span />
					</div>

					<p className="hero__desc" data-anim>
						Каждое блюдо — история. Каждый вечер — событие.
						<br />
						Добро пожаловать в мир гастрономии высокого уровня.
					</p>

					<div className="hero__btns" data-anim>
						<a href="#all-foods" className="hero__btn hero__btn--primary">
							Открыть меню <MoveUpRight size={18} />
						</a>
						<button className="hero__btn hero__btn--outline">
							Местоположение <MoveUpRight size={18} />
						</button>
					</div>

					<div className="hero__stats" data-anim>
						<div className="hero__stat">
							<span className="hero__stat-num">15+</span>
							<span className="hero__stat-label">лет опыта</span>
						</div>
						<div className="hero__stat-divider" />
						<div className="hero__stat">
							<span className="hero__stat-num">120+</span>
							<span className="hero__stat-label">блюд в меню</span>
						</div>
						<div className="hero__stat-divider" />
						<div className="hero__stat">
							<span className="hero__stat-num">4.9★</span>
							<span className="hero__stat-label">рейтинг</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
