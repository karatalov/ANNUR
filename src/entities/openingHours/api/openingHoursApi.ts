import { createApi } from '../../../shared/api/axios'

export type OpeningHour = {
	id: number
	data: string
	description: string
	work_day: string[]
}

export const getOpeningHours = async (lang: 'ru' | 'ky') => {
	const api = createApi(lang)
	const res = await api.get<OpeningHour[]>('opening_hours/')
	return res.data
}
