import { useLanguage } from '../../../providers/useLanguage'
import './Footer.scss'

const Footer = () => {
	const { lang } = useLanguage()
	const t = {
		ru: {
			info: 'Информация',
			home: 'Главная Страница',
			about: 'О нас',
			contacts: 'Контакты',
			tagline:
				'Изысканная кухня, живая атмосфера и незабываемые вечера с 2026 года',
			map: 'Мы на карте',
			openMap: 'Открыть в 2GIS',
			address: 'ул. Абдумомунова 249 г. Бишкек, Кыргызстан',
			shortAddress: 'ул. Абдумомунова 249',
			rights: 'Все права защищены.',
			made: 'Сделано с',
		},
		ky: {
			info: 'Маалымат',
			home: 'Башкы бет',
			about: 'Биз жөнүндө',
			contacts: 'Байланыш',
			tagline:
				'Жогорку деңгээлдеги ашкана, жагымдуу атмосфера жана унутулгус кечтер 2026-жылдан бери',
			map: 'Биз картада',
			openMap: '2GISтен ачуу',
			address: 'Абдумомунов көчөсү 249, Бишкек, Кыргызстан',
			shortAddress: 'Абдумомунов 249',
			rights: 'Бардык укуктар корголгон.',
			made: 'Сүйүү менен жасалды',
		},
	}
	const NAV = [
		{
			title: t[lang].info,
			links: [
				{ label: t[lang].home, href: '/' },
				{ label: t[lang].about, href: '/about' },
				{ label: t[lang].contacts, href: '/contact' },
			],
		},
	]

	return (
		<footer id="footer">
			<div className="footer__top-line">
				<span />◈<span />
			</div>

			<div className="footer__inner">
				<div className="footer__top">
					<div className="footer__brand">
						<a href="/" className="footer__logo">
							<span className="footer__logo-mark">◈</span>
							<span className="footer__logo-text">ANNUR</span>
						</a>

						<p className="footer__tagline">{t[lang].tagline}</p>

						<div className="footer__contacts">
							<span className="footer__contact-link footer__contact-link--addr">
								{t[lang].address}
							</span>
						</div>
					</div>

					<nav className="footer__nav">
						{NAV.map((col) => (
							<div key={col.title} className="footer__nav-col">
								<h4 className="footer__nav-title">{col.title}</h4>
								<ul className="footer__nav-list">
									{col.links.map((l) => (
										<li key={l.label}>
											<a href={l.href} className="footer__nav-link">
												<span className="footer__nav-arrow">›</span>
												{l.label}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</nav>
				</div>

				<div className="footer__map-section">
					<div className="footer__map-header">
						<span>{t[lang].map}</span>
					</div>

					<div className="footer__map-wrapper">
						<iframe
							src="https://go.2gis.com/tCLF2"
							width="100%"
							height="100%"
							frameBorder="0"
							allowFullScreen
							className="footer__map-iframe"
						/>

						<a
							href="https://go.2gis.com/tCLF2"
							target="_blank"
							rel="noopener noreferrer"
							className="footer__map-overlay-btn"
						>
							{t[lang].openMap}
						</a>

						<div className="footer__map-badge">{t[lang].shortAddress}</div>
					</div>
				</div>

				<div className="footer__divider" />

				<div className="footer__bottom">
					<p className="footer__copy">
						© {new Date().getFullYear()} ANNUR. {t[lang].rights}
					</p>

					<p className="footer__made">
						{t[lang].made} <span>♥</span> ANNUR
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
