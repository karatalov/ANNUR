import { LanguageContext } from './context'
import { useContext } from 'react'

export const useLanguage = () => {
	return useContext(LanguageContext)
}
