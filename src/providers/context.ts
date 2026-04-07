import { createContext } from 'react'

export type Lang = 'ru' | 'ky'
export const LanguageContext = createContext<{
	lang: Lang
	setLang: (lang: Lang) => void
}>({
	lang: 'ru',
	setLang: () => {},
})
