import { createApi } from '../../../shared/api/axios'

export interface Contact {
	id: number
	whatsup: string
	phone_cafe: string
	admin_phone: string
	insta_urls: string
}

export const getContacts = async (lang: 'ru' | 'ky') => {
	const api = createApi(lang)
	const res = await api.get<Contact[]>('contact/')
	return res.data
}
