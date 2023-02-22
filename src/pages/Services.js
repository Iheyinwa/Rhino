import Footer from '../components/Footer';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Service from '../images/Service1.png';
import { accordionData } from '../utils/content';
export default function Services() {
	return (
		<section>
			<Header />
			<img src={Service} alt="Our Services" className="object-contain w-full lg:h-[500px]" />
			<h1 className="text-center font-bold text-5xl mx-12">Our Services</h1>
			<hr className="border border-[#00013f] rounded-md mx-[42%] mb-8" />
			<section className="mb-8">
				{accordionData.map(({ title, content }) => <ServiceCard title={title} content={content} />)}
			</section>
			<Footer />
		</section>
	);
}
