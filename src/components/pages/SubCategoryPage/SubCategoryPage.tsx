import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './SubCategoryPage.scss'
import { useLanguage } from '../../../providers/useLanguage'
import { createApi } from '../../../shared/api/axios'

interface SubCategory {
  id: number
  name: string
  description: string
  subimage: string
}

interface Product {
  id: number
  product_name: string
  description: string
  price: number
  gram: number
  sub_category: number
  images: { id: number; product_image: string }[]
}

const SubCategoryPage = () => {
  const { id } = useParams()
  const { lang } = useLanguage()
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([])
  const [sub, setSub] = useState<SubCategory | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      try {
        setLoading(true)
        const api = createApi(lang)
        const subRes = await api.get<SubCategory>(`subcategory/${id}/`)
        setSub(subRes.data)
        const prodRes = await api.get<Product[]>('product/')
        const filtered = prodRes.data.filter((p) => p.sub_category === Number(id))
        setProducts(filtered)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
    window.scrollTo(0, 0)
  }, [id, lang])

  if (loading) {
    return (
      <section className="subpage">
        <div className="container">
          <div className="subpage__loader">
            <div className="subpage__loader-ring" />
            <span>{lang === 'ru' ? 'Загрузка...' : 'Жүктөлүүдө...'}</span>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="subpage">
      <div className="subpage__blob subpage__blob--1" aria-hidden="true" />
      <div className="subpage__blob subpage__blob--2" aria-hidden="true" />

      <div className="container">
        <header className="subpage__header">
          <p className="subpage__eyebrow">
            <span />ANNUR<span />
          </p>
          <h1 className="subpage__title">{sub?.name}</h1>
          {sub?.description && <p className="subpage__desc">{sub.description}</p>}
        </header>

        {products.length === 0 ? (
          <div className="subpage__empty">
            <p>{lang === 'ru' ? 'Нет продуктов' : 'Азыктар жок'}</p>
          </div>
        ) : (
          <div className="subpage__grid">
            {products.map((p, i) => {
              const imgSrc = p.images?.[0]?.product_image

              return (
                <article
                  key={p.id}
                  className="sp-card"
                  style={{ '--i': i } as React.CSSProperties}
                  onClick={() => navigate(`/product/${p.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(`/product/${p.id}`)}
                >
                  <div className="sp-card__img-wrap">
                    {imgSrc ? (
                      <img
                        src={imgSrc}
                        alt={p.product_name}
                        className="sp-card__img"
                      />
                    ) : (
                      /* fallback если фото нет */
                      <div className="sp-card__no-img">
                        <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="40" cy="44" r="22" stroke="currentColor" strokeWidth="1.5"/>
                          <path d="M18 44 Q40 32 62 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="30" y1="12" x2="26" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="50" y1="10" x2="54" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                    )}
                    {p.gram && (
                      <span className="sp-card__gram">{p.gram} г</span>
                    )}
                  </div>

                  <div className="sp-card__footer">
                    <span className="sp-card__name">{p.product_name}</span>
                    <span className="sp-card__price">{p.price} с</span>
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default SubCategoryPage