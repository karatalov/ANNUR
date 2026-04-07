import { Route, Routes } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './Routes.scss'
import AboutPage from '../AboutPage/AboutPage'
import ContactPage from '../ContactPage/ContactPage'
import HomePage from '../HomePage/HomePage'
import Category from '../HomePage/Category/Category'
import SubCategoryPage from '../SubCategoryPage/SubCategoryPage'
import ProductPage from '../ProductPage/ProductPage'
import OpeningHours from '../OpeningHours/OpeningHours'

const ROUTES = [
	{ id: 1, path: '/', element: <HomePage /> },
	{ id: 2, path: '/category/:id', element: <Category /> },
	{ id: 3, path: '/subcategory/:id', element: <SubCategoryPage /> },
	{ id: 4, path: '/about', element: <AboutPage /> },
	{ id: 5, path: '/contact', element: <ContactPage /> },
	{ id: 6, path: '/product/:id', element: <ProductPage /> },
	{ id: 7, path: '/openingHours', element: <OpeningHours /> },
]

const AppRoutes = () => (
	<div className="APP">
		<Header />
		<main>
			<Routes>
				{ROUTES.map((route) => (
					<Route key={route.id} path={route.path} element={route.element} />
				))}
			</Routes>
		</main>
		<Footer />
	</div>
)

export default AppRoutes
