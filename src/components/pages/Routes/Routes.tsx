import { Route, Routes } from 'react-router-dom'
import SubCategoryPage from '../SubCategoryPage/SubCategoryPage'
import OpeningHours from '../OpeningHours/OpeningHours'
import ContactPage from '../ContactPage/ContactPage'
import ProductPage from '../ProductPage/ProductPage'
import DesertsPage from '../DesertsPage/DesertsPage'
import DrinksPage from '../DrinksPage/DrinksPage'
import AboutPage from '../AboutPage/AboutPage'
import Category from '../HomePage/Category/Category'
import HomePage from '../HomePage/HomePage'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import './Routes.scss'

const ROUTES = [
	{ id: 1, path: '/', element: <HomePage /> },
	{ id: 2, path: '/category/:id', element: <Category /> },
	{ id: 3, path: '/subcategory/:id', element: <SubCategoryPage /> },
	{ id: 4, path: '/about', element: <AboutPage /> },
	{ id: 5, path: '/contact', element: <ContactPage /> },
	{ id: 6, path: '/product/:id', element: <ProductPage /> },
	{ id: 7, path: '/openingHours', element: <OpeningHours /> },
	{ id: 8, path: '/Drinks', element: <DrinksPage /> },
	{ id: 8, path: '/Desserts', element: <DesertsPage /> },
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
