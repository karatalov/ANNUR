import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './ProductPage.scss'
import {
	getProductById,
	type IProduct,
} from '../../../entities/product/api/productsApi'
import { useLanguage } from '../../../providers/useLanguage'

const ProductPage = () => {
	const { id } = useParams()
	const { lang } = useLanguage()
	const navigate = useNavigate()
	const [product, setProduct] = useState<IProduct | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!id) return
		const fetchProduct = async () => {
			try {
				setLoading(true)
				const data = await getProductById(id, lang)
				setProduct(data)
			} catch (e) {
				console.error(e)
			} finally {
				setLoading(false)
			}
		}
		fetchProduct()
		window.scrollTo(0, 0)
	}, [id, lang])

	if (loading) {
		return (
			<section className="product-page">
				<div className="container">
					<div className="product-page__loader">
						<div className="product-page__loader-ring" />
						<span>{lang === 'ru' ? 'Загрузка...' : 'Жүктөлүүдө...'}</span>
					</div>
				</div>
			</section>
		)
	}

	if (!product) {
		return (
			<section className="product-page">
				<div className="container">
					<div className="product-page__empty">
						<p>{lang === 'ru' ? 'Продукт не найден' : 'Азык табылган жок'}</p>
					</div>
				</div>
			</section>
		)
	}

	return (
		<section className="product-page">
			<div className="pp-blob pp-blob--1" aria-hidden="true" />
			<div className="pp-blob pp-blob--2" aria-hidden="true" />

			<div className="container">
				{/* back link */}
				<button className="pp-back" onClick={() => navigate(-1)}>
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path
							d="M10 3L5 8l5 5"
							stroke="currentColor"
							strokeWidth="1.6"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					{lang === 'ru' ? 'Назад' : 'Артка'}
				</button>

				<div className="pp-wrapper">
					{/* image */}
					<div className="pp-img-wrap">
						<img
							src={product.images?.[0]?.product_image}
							alt={product.product_name}
							className="pp-img"
						/>
					</div>

					{/* info */}
					<div className="pp-info">
						<p className="pp-eyebrow">
							<span />
							ANNUR
							<span />
						</p>

						<h1 className="pp-title">{product.product_name}</h1>

						<div className="pp-chips">
							{product.gram && (
								<span className="pp-chip">{product.gram} г</span>
							)}
						</div>

						{product.description && (
							<p className="pp-desc">{product.description}</p>
						)}

						<div className="pp-price-row">
							<span className="pp-price">{product.price}</span>
							<span className="pp-currency">сом</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ProductPage
