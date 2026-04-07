import { useEffect, useState } from 'react'
import { useLanguage } from '../../../providers/useLanguage'
import './ContactPage.scss'
import {
	getContacts,
	type Contact,
} from '../../../entities/contact/api/contactApi'

const PhoneIcon = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.15 12 19.79 19.79 0 0 1 .08 3.38 2 2 0 0 1 2.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L6.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
	</svg>
)

const WhatsAppIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
		<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
	</svg>
)

const InstaIcon = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="1.5"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<rect x="2" y="2" width="20" height="20" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
	</svg>
)

const ContactPage = () => {
	const { lang } = useLanguage()
	const [contacts, setContacts] = useState<Contact[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchContacts = async () => {
			try {
				setLoading(true)
				const data = await getContacts(lang)
				setContacts(data)
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		fetchContacts()
		window.scrollTo(0, 0)
	}, [lang])

	if (loading) {
		return (
			<section id="contact">
				<div className="container">
					<div className="contact-loader">
						<div className="contact-loader__ring" />
						<span>{lang === 'ru' ? 'Загрузка...' : 'Жүктөлүүдө...'}</span>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section id="contact">
			<div className="ct-blob ct-blob--1" aria-hidden="true" />
			<div className="ct-blob ct-blob--2" aria-hidden="true" />

			<div className="container">
				<header className="ct-header">
					<p className="ct-eyebrow">
						<span />
						ANNUR
						<span />
					</p>
					<h1 className="ct-title">
						{lang === 'ru' ? 'Контакты' : 'Байланыш'}
					</h1>
					<p className="ct-subtitle">
						{lang === 'ru'
							? 'Свяжитесь с нами любым удобным способом'
							: 'Бизге каалаган ыңгайлуу жол менен байланышыңыз'}
					</p>
				</header>

				<div className="ct-grid">
					{contacts.map((c) => (
						<div key={c.id} className="ct-card">
							{/* gold top line */}
							<div className="ct-card__top-line" aria-hidden="true" />

							<div className="ct-card__links">
								<a
									href={`https://wa.me/${c.whatsup}`}
									target="_blank"
									rel="noopener noreferrer"
									className="ct-link ct-link--whatsapp"
								>
									<span className="ct-link__icon">
										<WhatsAppIcon />
									</span>
									<span className="ct-link__body">
										<span className="ct-link__label">WhatsApp</span>
										<span className="ct-link__value">{c.whatsup}</span>
									</span>
									<span className="ct-link__arrow">↗</span>
								</a>

								<a href={`tel:${c.phone_cafe}`} className="ct-link">
									<span className="ct-link__icon">
										<PhoneIcon />
									</span>
									<span className="ct-link__body">
										<span className="ct-link__label">
											{lang === 'ru' ? 'Телефон кафе' : 'Кафенин телефону'}
										</span>
										<span className="ct-link__value">{c.phone_cafe}</span>
									</span>
									<span className="ct-link__arrow">↗</span>
								</a>

								<a href={`tel:${c.admin_phone}`} className="ct-link">
									<span className="ct-link__icon">
										<PhoneIcon />
									</span>
									<span className="ct-link__body">
										<span className="ct-link__label">
											{lang === 'ru' ? 'Администратор' : 'Администратор'}
										</span>
										<span className="ct-link__value">{c.admin_phone}</span>
									</span>
									<span className="ct-link__arrow">↗</span>
								</a>

								<a
									href={c.insta_urls}
									target="_blank"
									rel="noopener noreferrer"
									className="ct-link ct-link--insta"
								>
									<span className="ct-link__icon">
										<InstaIcon />
									</span>
									<span className="ct-link__body">
										<span className="ct-link__label">Instagram</span>
										<span className="ct-link__value">@annur</span>
									</span>
									<span className="ct-link__arrow">↗</span>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default ContactPage
