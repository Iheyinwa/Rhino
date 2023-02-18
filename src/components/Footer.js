import '../App.css';
import { Linkedin, Telegram, Whatsapp } from '../icons';
import Rhinospine from '../images/RHINOSPINE FULL.png';
export default function Footer() {
	return (
		<footer className="lg:grid lg:grid-cols-2 bg-[#AFAFAF] lg:gap-4 relative">
			<div className="wave-container">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className="shape-fill"
					/>
				</svg>
			</div>
			<div className="lg:mt-[30%] mb-12">
				<img src={Rhinospine} alt="Rhinospine" className="w-[20rem] relative right-4 lg:top-0 top-12" />
			</div>

			<div className="lg:mt-[43%] mx-12 mb-8 lg:grid lg:grid-cols-3">
				<a href="http://www.linkedin.com/company/rhinospine" className="flex items-center ">
					<Linkedin /> <p className="font-bold">LinkedIn</p>
				</a>
				<a href="http://www.linkedin.com/company/rhinospine" className="flex items-center ">
					<Telegram />
					<p className="font-bold">Telegram</p>
				</a>
				<a href="http://www.linkedin.com/company/rhinospine" className="flex items-center ">
					<Whatsapp />
					<p className="font-bold">Whatsapp</p>
				</a>
			</div>
			{/* <hr className="pb-[3px] lg:col-span-2" /> */}
			<p className="lg:col-span-2 lg:text-center mx-[20%]">
				<a href="https://storyset.com/work">Work illustrations by Storyset</a>
			</p>
		</footer>
	);
}
