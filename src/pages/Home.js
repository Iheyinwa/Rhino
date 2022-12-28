import React from 'react';
import Header from '../components/Header';
// import Rhinospine from '../images/RHINOSPINE FULL.png';
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

export default function Home() {
	return (
		<div>
			<Header />
			<div className="lg:flex lg:justify-between bg-gray-100 py-12 pb-44 ">
				<h1 className="font-bold text-5xl w-[40%] h-[50%] mx-16 my-20">
					Improving lives by rendering intellectual ability
				</h1>
				<div className="lg:w-[50%] lg:h-[40%]">
					<img src={rhino} alt="hero" width={700} height={600} className="sm:order-1" />
				</div>
			</div>

			<div className="drop-shadow-2xl rounded-xl mx-8 h-16 p-8 mt-24 grid grid-cols-5 lg:flex lg:justify-between gap-4 items-center">
				<img src={ansys} alt="ANSYS" width={200} height={200} className="lg:w-[90px]" />
				<img src={autocad} alt="AUTOCAD" width={200} height={200} className="lg:w-[90px]" />
				<img src={blender} alt="BLENDER" width={200} height={200} className="lg:w-[90px]" />
				<img src={coreldraw} alt="COREL DRAW" width={175} height={175} className="lg:w-[90px]" />
				<img src={fusion} alt="FUSION 360" width={175} height={175} className="lg:w-[90px]" />
				<img src={inventor} alt="INVENTOR" width={200} height={200} className="lg:w-[90px]" />
				<img src={keyshot} alt="KEYSHOT" width={200} height={200} className="lg:w-[90px]" />
				<img src={lightburn} alt="LIGHTBURN" width={175} height={175} className="lg:w-[90px]" />
				<img src={msoffice} alt="MS OFFICE SUITE" width={175} height={175} className="lg:w-[90px]" />
				<img src={solidworks} alt="SOLID WORKS" width={200} height={200} className="lg:w-[90px]" />
			</div>

			<section className="lg:flex lg:justify-between py-12 mt-24 items-center">
				<p className="border-t border-l-2 border-b rounded-2xl w-[45%] ml-16 p-[20px] py-12 text-center">
					Offset the burden of research <p>and</p>development when you choose Rhinospine
				</p>

				<div className="lg:w-[60%] lg:h-[40%]">
					<img
						src={rhino}
						alt="hero"
						width={670}
						height={550}
						className="border-t border-r-2 border-b border-l rounded-2xl p-8"
					/>
				</div>
			</section>
			<section className="ml-12 grid lg:grid-cols-3 grid-cols-2 lg:gap-12 gap-y-8 mt-32 pb-12">
				<p className="lg:col-span-3 text-center col-span-2">Services we offer</p>
				<div className="border py-32 w-[70%] text-center ">CAD</div>
				<div className="border py-32 w-[70%] text-center">CAD</div>
				<div className="border py-32 w-[70%] text-center">CAD</div>
				<div className="border py-32 w-[70%] text-center">CAD</div>
				<div className="border py-32 w-[70%] text-center">CAD</div>
				<div className="border py-32 w-[70%] text-center">CAD</div>
			</section>
			<Footer />
		</div>
	);
}
