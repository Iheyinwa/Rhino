import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';

export default function MobileMenu() {
	return (
		<ul className="list-style-none mx-[30px] relative h-[100%]">
			<Link to="/">
				<List item="Home" />
			</Link>
			<Link to="/about">
				<List item="About" />
			</Link>
			<Link to="/services">
				<List item="Services" />
			</Link>
			<Link to="/contact">
				<List item="Contact" />
			</Link>
		</ul>
	);
}
