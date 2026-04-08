import { useEffect } from 'react'
import Hero from './Hero/Hero'
import Foods from './Foods/Foods'

const HomePage = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<Hero />
			<Foods />
		</>
	)
}

export default HomePage
