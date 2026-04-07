import { createApi } from '../../../shared/api/axios'

export interface Category {
	id: number
	category_name: string
	description: string
	category_icon: string
}

export const getCategories = async (lang: 'ru' | 'ky') => {
	const api = createApi(lang)
	const res = await api.get<Category[]>('category/')
	return res.data
}