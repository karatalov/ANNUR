import { useEffect } from 'react'
import AllFoods from './AllFoods/AllFoods'
import Hero from './Hero/Hero'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Hero />
			<AllFoods />
		</>
	)
}

export default Home
