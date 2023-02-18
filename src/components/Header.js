import { Link } from 'react-router-dom';
import List from './List';
import Rhinospine from '../images/RHINOSPINE NO BG SINGLE.png';
import { Close, Menu } from '../icons';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
export default function Header() {
	const [ State, setState ] = useState(false);

	function openMenu() {
		setState(!State);
	}
	return (
		<div className="sticky top-0 z-10">
			<nav className="flex justify-between items-center bg-[#AFAFAF]">
				<img src={Rhinospine} alt="RhinoSpine" className="w-[20rem] h-[10rem] relative right-4" />

				<div className="lg:hidden cursor-pointer my-8 p-8">
					{State ? <Close onclick={openMenu} /> : <Menu onclick={openMenu} className="hidden" />}
				</div>
				<ul className="list-style-none lg:flex lg:justify-around p-8 hidden">
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
			</nav>
			{State && <MobileMenu />}
		</div>
	);
}
