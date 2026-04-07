import { createApi } from '../../../shared/api/axios'

export interface Product {
	id: number
	product_name: string
	description: string
	price: number
	sub_category: number
	images: {
		id: number
		product_image: string
	}[]
}

export interface IProduct {
	id: number
	product_name: string
	description: string
	price: number
	gram: number
	sub_category: number
	images: {
		id: number
		product_image: string
	}[]
}

export const getProducts = async (lang: 'ru' | 'ky') => {
	const api = createApi(lang)
	const res = await api.get<Product[]>('product/')
	return res.data
}

export const getProductById = async (id: string, lang: 'ru' | 'ky') => {
	const api = createApi(lang)
	const res = await api.get<IProduct>(`product/${id}/`)
	return res.data
}
