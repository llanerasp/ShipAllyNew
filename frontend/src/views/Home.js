//frontend/src/views/Home.js
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import EnvironmentalImpact from '../components/home/EnvironmentalImpact';
import HowItWorks from '../components/home/HowItWorks';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import Stats from '../components/home/Stats';
import Partners from '../components/home/Partners';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Stats />
			<HowItWorks />
			<Benefits />
			<EnvironmentalImpact />
			<Features />
			<Testimonials />
			<Partners />
			<CallToAction />
			<Footer />
		</div>
	);
};

export default Home;
