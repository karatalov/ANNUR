import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import HeaderLogo from '../../../assets/headerImages/headerLogo.jpg'
import './Header.scss'

const NAV_LINKS = [
	{ to: '/', label: 'Главная' },
	{ to: '/about', label: 'О нас' },
	{ to: '/contact', label: 'Контакты' },
]

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

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
							{NAV_LINKS.map(({ to, label }) => (
								<li key={to} className="header__nav-item">
									<NavLink
										to={to}
										end={to === '/'}
										className={({ isActive }) =>
											`header__nav-link${isActive ? ' active' : ''}`
										}
										onClick={() => setMenuOpen(false)}
									>
										{label}
										<span className="header__nav-underline" />
									</NavLink>
								</li>
							))}
						</ul>
					</nav>

					<div className="header__actions">
						<a href="tel:+996123456789" className="header__phone">
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
								<path
									d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
                  A19.5 19.5 0 0 1 3.15 12 19.79 19.79 0 0 1 .08 3.38 2 2 0 0
                  1 2.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2
                  2 0 0 1-.45 2.11L6.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2
                  0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
								/>
							</svg>
							+996 123 456 789
						</a>
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
