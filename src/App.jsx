import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Sebs from './pages/sebs/Sebs'
import Seb from './pages/seb/Seb'
import Add from './pages/add/Add'
import Orders from './pages/orders/Orders'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import MySebs from './pages/mySebs/MySebs'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './app.scss'

function App() {
	const Layout = () => {
		return (
			<div className='app'>
				<Navbar />
				<Outlet />
				<Footer />
			</div>
		)
	}

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/sebs',
					element: <Sebs />,
				},
				{
					path: '/seb/:id',
					element: <Seb />,
				},
				{
					path: '/orders',
					element: <Orders />,
				},
				{
					path: '/mysebs',
					element: <MySebs />,
				},
				{
					path: '/add',
					element: <Add />,
				},
				{
					path: '/messages',
					element: <Messages />,
				},
				{
					path: '/message/:id',
					element: <Message />,
				},
			],
		},
	])

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
