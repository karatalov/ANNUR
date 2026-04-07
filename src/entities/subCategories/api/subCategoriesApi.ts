import { createApi } from '../../../shared/api/axios'

export interface Product {
	id: number
	name: string
	description: string
	price: number
	image: string
}
export interface SubCategory {
	id: number
	name: string
	description: string
	subimage: string
	products: Product[]
}
export interface CategoryResponse {
	id: number
	category_name: string
	subcategories: SubCategory[]
}

export const getSubCategories = async (
	categoryId: number,
	lang: 'ru' | 'ky',
) => {
	const api = createApi(lang)
	const res = await api.get<CategoryResponse>(`category/${categoryId}/`)
	return res.data
}
