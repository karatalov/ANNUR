import { Route, Routes } from 'react-router-dom'
import BreakfastPage from '../Home/BreakfastPage/BreakfastPage'
import EuropeanPage from '../Home/EuropeanPage/EuropeanPage'
import JapanesePage from '../Home/JapanesePage/JapanesePage'
import ChickenDish from '../Home/KoreanPage/СhickenDish/СhickenDish'
import DrinksPage from '../Home/DrinksPage/DrinksPage'
import KoreanPage from '../Home/KoreanPage/KoreanPage'
import BakedRolls from '../Home/JapanesePage/BakedRolls/BakedRolls'
import ColdRolls from '../Home/JapanesePage/ColdRolls/ColdRolls'
import HotSnacks from '../Home/KoreanPage/HotSnacks/HotSnacks'
import Breakfast from '../Home/BreakfastPage/BreakfastPage'
import Milkshake from '../Home/DrinksPage/Milkshake/Milkshake'
import HotRolls from '../Home/JapanesePage/HotRolls/HotRolls'
import SetRolls from '../Home/JapanesePage/SetRolls/SetRolls'
import MainFood from '../Home/EuropeanPage/MainFood/MainFood'
import Desserts from '../Home/Desert/Desert'
import Tokboki from '../Home/KoreanPage/Tokboki/Tokboki'
import Limonad from '../Home/DrinksPage/Limonad/Limonad'
import Contact from '../Contact/Contact'
import Kimbap from '../Home/KoreanPage/Kimbap/Kimbap'
import Coffee from '../Home/DrinksPage/Coffee/Coffee'
import Header from '../../layout/Header/Header'
import Footer from '../../layout/Footer/Footer'
import Soups from '../Home/KoreanPage/Soups/Soups'
import Salad from '../Home/Salad/Salad'
import Pasta from '../Home/EuropeanPage/Pasta/Pasta'
import Steak from '../Home/EuropeanPage/Steak/Steak'
import About from '../About/About'
import Home from '../Home/Home'
import Tea from '../Home/DrinksPage/Tea/Tea'
import './Routes.scss'

const ROUTES = [
	{ id: 1, path: '/', element: <Home /> },
	{ id: 2, path: '/japaneseFoods', element: <JapanesePage /> },
	{ id: 3, path: '/koreanFoods', element: <KoreanPage /> },
	{ id: 4, path: '/europeanFoods', element: <EuropeanPage /> },
	{ id: 5, path: '/drinks', element: <DrinksPage /> },
	{ id: 6, path: '/breakfast', element: <BreakfastPage /> },
	{ id: 7, path: '/japaneseFoods/coldRolls', element: <ColdRolls /> },
	{ id: 8, path: '/japaneseFoods/hotRolls', element: <HotRolls /> },
	{ id: 9, path: '/japaneseFoods/bakedRolls', element: <BakedRolls /> },
	{ id: 10, path: '/japaneseFoods/setsRolls', element: <SetRolls /> },
	{ id: 11, path: '/koreanFoods/tokboki', element: <Tokboki /> },
	{ id: 12, path: '/koreanFoods/chickenDish', element: <ChickenDish /> },
	{ id: 13, path: '/koreanFoods/hotSnacks', element: <HotSnacks /> },
	{ id: 14, path: '/koreanFoods/kimbap', element: <Kimbap /> },
	{ id: 15, path: '/koreanFoods/soups', element: <Soups /> },
	{ id: 16, path: '/europeanFoods/pasta', element: <Pasta /> },
	{ id: 17, path: '/europeanFoods/mainFood', element: <MainFood /> },
	{ id: 18, path: '/europeanFoods/steak', element: <Steak /> },
	{ id: 19, path: '/breakfast', element: <Breakfast /> },
	{ id: 20, path: '/drinks/coffee', element: <Coffee /> },
	{ id: 21, path: '/drinks/tea', element: <Tea /> },
	{ id: 22, path: '/drinks/limonad', element: <Limonad /> },
	{ id: 23, path: '/drinks/kokteil', element: <Milkshake /> },
	{ id: 24, path: '/salad', element: <Salad /> },
	{ id: 25, path: '/desert', element: <Desserts /> },
	{ id: 26, path: '/about', element: <About /> },
	{ id: 27, path: '/contact', element: <Contact /> },
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
