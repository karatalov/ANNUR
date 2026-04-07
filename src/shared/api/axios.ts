import axios from 'axios'

export const createApi = (lang: 'ru' | 'ky') => {
	return axios.create({
		baseURL: `https://api.annur.com.kg/${lang}/`,
		headers: {
			'Content-Type': 'application/json',
		},
	})
}
