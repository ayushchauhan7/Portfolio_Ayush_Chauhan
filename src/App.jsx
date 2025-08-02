import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import ServiceSummary from "./sections/ServiceSummary.jsx";
import Services from "./sections/Services.jsx";
import ReactLenis from "lenis/react";
import About from "./sections/About.jsx";

const App = () => {
	return (
		<ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
			<Navbar />
			<Hero />
			<ServiceSummary />
			<Services />
			<About />
		</ReactLenis>
	);
};
export default App;
