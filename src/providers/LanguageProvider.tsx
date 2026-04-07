import { LanguageContext, type Lang } from './context'
import { useState } from 'react'

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode
}) => {
	const [lang, setLangState] = useState<Lang>(
		(localStorage.getItem('lang') as Lang) || 'ru',
	)
	const setLang = (newLang: Lang) => {
		localStorage.setItem('lang', newLang)
		setLangState(newLang)
	}
	return (
		<LanguageContext.Provider value={{ lang, setLang }}>
			{children}
		</LanguageContext.Provider>
	)
}
