import AboutCard from '../components/AboutCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroAbout from '../images/rhino1.jpg';
export default function About() {
	const values = [ 'Integrity', 'Respect', 'Responsibility', 'Excellence', 'Team Work' ];
	const styles = {
		borderWidth: '1px',
		borderLeftWidth: '4px',
		borderLeftColor: '#00013f',
		padding: '32px',
		borderRadius: '12px',
		marginBottom: '18px',
		display: 'flex',
		justifyContent: 'space-between',
		width: '50%',
		margin: 'auto'
	};
	return (
		<div>
			<Header />
			<img src={HeroAbout} alt="Mechanical services" />
			<section>
				<AboutCard
					title="About Rhinospine"
					children={
						<p className="mx-12 p-12 text-justify">
							Welcome to Rhinospine, we are a solutions-driven enterprise with cutting-edge architecture
							on computer aided product-project design and engineering, striving for excellence in
							delivering client satisfaction. <br />Here in Rhinospine, we help you offset the burden of
							research and development (R&D) workload, design and analysis procedures, product modeling
							and prototyping in theory and practice.
						</p>
					}
				/>
				<AboutCard
					title="Our Vision"
					children={
						<p className="mx-12 p-8 text-center">
							To be globally reckoned as the leading African founded research and development engineering
							enterprise.
						</p>
					}
				/>
				<AboutCard
					title="Our Mission"
					children={
						<p className="mx-12 p-8 text-center">
							To better lives by assisting and rendering intellectual capacity.
						</p>
					}
				/>

				<AboutCard
					title="Our Values"
					children={values.map((value) => (
						<div key={value} style={styles}>
							{value}
						</div>
					))}
				/>
			</section>

			<Footer />
		</div>
	);
}
