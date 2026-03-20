import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Router from './components/pages/Routes/Routes.tsx'
import './main.scss'

createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Router />
	</BrowserRouter>,
)
