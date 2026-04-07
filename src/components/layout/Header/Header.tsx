import { useState, useEffect } from 'react'
import { useLanguage } from '../../../providers/useLanguage'
import { UserStar } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import HeaderLogo from '/headerImages/header.png'
import './Header.scss'

const NAV_LINKS = [
	{ to: '/', labelRu: 'Главная', labelKy: 'Башкы' },
	{ to: '/about', labelRu: 'О нас', labelKy: 'Биз жөнүндө' },
	{ to: '/contact', labelRu: 'Контакты', labelKy: 'Байланыш' },
	{ to: '/openingHours', labelRu: 'Время работы', labelKy: 'Иштоо убактысы' },
]

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const { lang, setLang } = useLanguage()
	const isAdmin = true

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 10)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	useEffect(() => {
		document.body.style.overflow = menuOpen ? 'hidden' : ''
		return () => {
			document.body.style.overflow = ''
		}
	}, [menuOpen])

	return (
		<header id="header" className={scrolled ? 'scrolled' : ''}>
			<div className="container">
				<div className="header">
					<NavLink to="/" className="header__logo-link">
						<img
							src={HeaderLogo}
							alt="Логотип ресторана"
							className="header__logo"
						/>
					</NavLink>

					<nav className={`header__nav${menuOpen ? ' open' : ''}`}>
						<ul className="header__nav-list">
							{NAV_LINKS.map(({ to, labelRu, labelKy }) => (
								<li key={to} className="header__nav-item">
									<NavLink
										to={to}
										end={to === '/'}
										className={({ isActive }) =>
											`header__nav-link${isActive ? ' active' : ''}`
										}
										onClick={() => setMenuOpen(false)}
									>
										{lang === 'ru' ? labelRu : labelKy}
										<span className="header__nav-underline" />
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<div className="header__actions">
						<div className="lang-switcher">
							<button
								className={`lang-switcher__btn ${lang === 'ru' ? 'active' : ''}`}
								onClick={() => setLang('ru')}
							>
								RU
							</button>
							<button
								className={`lang-switcher__btn ${lang === 'ky' ? 'active' : ''}`}
								onClick={() => setLang('ky')}
							>
								KG
							</button>
						</div>

						{isAdmin && (
							<a
								href="https://api.annur.com.kg/ru/admin/"
								target="_blank"
								rel="noopener noreferrer"
								className="header__admin-btn"
								onClick={() => setMenuOpen(false)}
							>
								<UserStar />
							</a>
						)}
					</div>

					<button
						className={`header__burger${menuOpen ? ' open' : ''}`}
						aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
						aria-expanded={menuOpen}
						onClick={() => setMenuOpen((prev) => !prev)}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
