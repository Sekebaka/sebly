import React from 'react'
import { useState } from 'react'
import SebCard from '../../components/sebCard/SebCard'
import { sebs } from '../../data'
import './Sebs.scss'

const Sebs = () => {
	const [open, setOpen] = useState(false)
	const [sort, setSort] = useState('sales')

	const reSort = type => {
		setSort(type)
		setOpen(false)
	}

	return (
		<div className='sebs'>
			<div className='container'>
				<span className='breadcrumbs'> SEBLY GRAPHICS & DESIGN</span>
				<h1>AI Artists</h1>
				<p>Explore the boundaries of art and technology with Sebly AI Artists</p>
				<div className='menu'>
					<div className='left'>
						<span>Budged</span>
						<input type='text' placeholder='min' />
						<input type='text' placeholder='max' />
						<button>Apply</button>
					</div>
					<div className='right'>
						<span className='sortBy'>Sort By</span>
						<span className='sortType'>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
						<img src='./img/down.png' alt='' onClick={() => setOpen(!open)} />
						{open && (
							<div className='rightMenu'>
								{sort === 'sales' ? (
									<span onClick={() => reSort('createAt')}>Newest</span>
								) : (
									<span onClick={() => reSort('sales')}>Best Selling</span>
								)}
							</div>
						)}
					</div>
				</div>
				<div className='cards'>
					{sebs.map(seb => (
						<SebCard key={seb.id} item={seb} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Sebs
