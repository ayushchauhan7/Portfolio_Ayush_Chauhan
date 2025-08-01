import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import ServiceSummary from "./sections/ServiceSummary.jsx";

const App = () => {
	return (
		<div className='relative w-screen min-h-screen overflow-x-auto'>
			<Navbar />
			<Hero />
			<ServiceSummary />
		</div>
	);
};
export default App;
