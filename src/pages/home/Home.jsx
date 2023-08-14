import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import './Home.scss'
import { cards } from '../../data'
import { projects } from '../../data'
import CatCard from '../../components/catCard/CatCard'
import ProjectCard from '../../components/projectCard/ProjectCard'


const Home = () => {
	return (
		<div className='home'>
			<Featured />
			<TrustedBy />
			<Slide slidesToShow={5} arrowsScroll={5}>
				{cards.map(card => (
					<CatCard key={card.id} item={card} />
				))}
			</Slide>
			<div className='features'>
				<div className='container'>
					<div className='item'>
						<h1>A whole world at your fingers</h1>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							The best for every budget
							<p>Find the right services at every price point. No hourly rates, just project-based pricing.</p>
						</div>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							Get quality work done <br /> quickly
							<p>Hand your project over to a talented experts in minutes, get long-lasting results.</p>
						</div>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							Pay when you're happy
							<p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
						</div>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							Count on 24/7 support
							<p>Our round-the-clock support team is available to help anytime, anywhere.</p>
						</div>
					</div>
					<div className='item'>
						<video src='video/video.mp4' controls></video>
					</div>
				</div>
			</div>
			<div className='features dark'>
				<div className='container'>
					<div className='item'>
						<h1>Sebly business</h1>
						<h1>Solutions designed for teams</h1>
						<p>Upgrade to a curated experience packed with tools and benefits, dedicated to businesses</p>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							Connect to experts with proven business experience
						</div>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							Menage teamwork and boost productivity with one powerful workspace
						</div>
						<div className='title'>
							<img src='./img/check.png' alt='' />
							Get matched with the customer success manager
						</div>
						<button>Explore Sebly Business</button>
					</div>
					<div className='item'>
						<img src='https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593361_960_720.jpg' alt='' />
					</div>
				</div>
			</div>
			<Slide slidesToShow={4} arrowsScroll={4}>
				{projects.map(card => (
					<ProjectCard key={card.id} item={card} />
				))}
			</Slide>
		</div>
	)
}

export default Home
