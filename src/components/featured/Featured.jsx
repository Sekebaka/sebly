import React from 'react'
import './featured.scss'

const Featured = () => {
	return (
		<div className='featured'>
			<div className='container'>
				<div className='left'>
					<h1>
						Become a <i>developer</i> - find the perfect services for your business
					</h1>
					<div className='search'>
						<div className='searchInput'>
							<img src='./img/search.png' alt='' />
							<input type='text' placeholder='Type "building apps"' />
						</div>
						<button>Search</button>
					</div>
					<div className='popular'>
						<span>Popular:</span>
						<button>Mobile app</button>
						<button>Wordpress</button>
						<button>Design</button>
						<button>AI</button>
					</div>
				</div>
				<div className='right'>
					<img src='./img/man.png' alt='' />
				</div>
			</div>
		</div>
	)
}

export default Featured
