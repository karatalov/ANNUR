import { createApi } from '../../../shared/api/axios'

export interface CafeImage {
	id: number
	cafe_image: string
	about_us: number
}
export interface About {
	id: number
	information: string
	description: string
	cafe_images: CafeImage[]
}

export const getAboutList = async (lang: 'ru' | 'ky') => {
	const api = createApi(lang)
	const res = await api.get<About[]>('about/')
	return res.data
}

