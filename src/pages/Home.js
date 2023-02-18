import React from 'react';
import Header from '../components/Header';
import rhino from '../images/rhino.png';
import ansys from '../images/ansys.png';
import autocad from '../images/autocad.png';
import blender from '../images/blender.png';
import coreldraw from '../images/coreldraw.png';
import fusion from '../images/Fusion 360.png';
import inventor from '../images/inventor.png';
import keyshot from '../images/Keyshot.png';
import lightburn from '../images/LightBurn.png';
import msoffice from '../images/MS office.png';
import solidworks from '../images/solid works.png';
import Footer from '../components/Footer';
import '../App.css';
import Card from '../components/Card';

export default function Home() {
	return (
		<div>
			<Header />
			<div className="lg:flex lg:justify-between bg-[#AFAFAF] py-12 pb-44 relative">
				<h1 className="font-bold text-5xl lg:w-[40%] w-[100%]  h-[50%] mx-12 my-20">
					Improving lives <br />by <br />rendering intellectual ability
				</h1>
				<div className="lg:w-[50%] lg:h-[40%]">
					<img src={rhino} alt="hero" width={700} height={600} className="sm:order-1" />
				</div>
				<div className="Hero-wave">
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
			</div>

			<div className="drop-shadow-2xl rounded-xl mx-8 h-16 p-8 mt-24 grid grid-cols-3 lg:flex lg:justify-between gap-4 items-center">
				<img src={ansys} alt="ANSYS" width={200} height={200} className="lg:w-[90px] w-[50%]" />
				<img src={autocad} alt="AUTOCAD" width={200} height={200} className="lg:w-[90px] w-[50%]" />
				<img src={blender} alt="BLENDER" width={200} height={200} className="lg:w-[90px] w-[50%]" />
				<img src={coreldraw} alt="COREL DRAW" width={175} height={175} className="lg:w-[90px] w-[50%]" />
				<img src={fusion} alt="FUSION 360" width={175} height={175} className="lg:w-[90px] w-[50%]" />
				<img src={inventor} alt="INVENTOR" width={200} height={200} className="lg:w-[90px] w-[50%]" />
				<img src={keyshot} alt="KEYSHOT" width={200} height={200} className="lg:w-[90px] w-[50%]" />
				<img src={lightburn} alt="LIGHTBURN" width={175} height={175} className="lg:w-[90px] w-[50%]" />
				<img src={msoffice} alt="MS OFFICE SUITE" width={175} height={175} className="lg:w-[90px] w-[50%]" />
				<img src={solidworks} alt="SOLID WORKS" width={200} height={200} className="lg:w-[90px] w-[50%]" />
			</div>

			<section className="lg:flex lg:justify-between mt-24 md:mt-[350px] items-center">
				<p className="w-full lg:w-[50%] ml-16 md:ml-4 p-[20px] py-12 text-center font-semibold text-3xl">
					Offset the burden of research <br />and<br />development when you choose Rhinospine
				</p>

				<div className="lg:w-[60%] lg:h-[40%]">
					<img
						src={rhino}
						alt="hero"
						width={670}
						height={550}
						className="border-t border-r-2 border-b border-l rounded-2xl p-8 border-white shadow-lg md:w-[100%]"
					/>
				</div>
			</section>
			<section className="mt-36">
				<div>
					<p className=" text-center col-span-2 font-semibold text-3xl">Services we offer</p>
					<hr className="border border-[#00013f] rounded-md mx-[42%]" />
				</div>
				<section className="grid justify-items-center lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-8 mt-12 pb-12 mx-12">
					<Card title="Computer Aided Design" />
					<Card title="Computer Aided Manufacturing" />
					<Card title="Computer Aided Engineering" />
					<Card title="Project Development and Prototyping" />
					<Card title="Technical Writing" />
					<Card title="Machine Design and Fabrication" />
				</section>
			</section>
			<Footer />
		</div>
	);
}
