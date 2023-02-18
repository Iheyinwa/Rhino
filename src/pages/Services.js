import Footer from '../components/Footer';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Service from '../images/Service1.png';
export default function Services() {
	return (
		<section>
			<Header />
			<img src={Service} alt="Our Services" className="object-contain w-full lg:h-[500px]" />
			<h1 className="text-center font-bold text-5xl mx-12">Our Services</h1>
			<hr className="border border-[#00013f] rounded-md mx-[42%] mb-8" />
			<section className="mb-8">
				<ServiceCard service="Computer Aided Drawing (CAD)" />
				<ServiceCard service="Computer Aided Manufacturing (CAM)" />
				<ServiceCard service="Computer Aided Engineering (CAE)" />
				<ServiceCard service="Project Development and Prototyping" />
				<ServiceCard service="Technical Writing" />
				<ServiceCard service="Machine Design and Fabrication" />
			</section>
			<Footer />
		</section>
	);
}
