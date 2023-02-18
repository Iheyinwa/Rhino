export default function AboutCard({ title, children }) {
	return (
		<section>
			<h1 className="text-center font-bold text-5xl mt-12">{title}</h1>
			<hr className="border border-[#00013f] rounded-md mx-[42%] mb-8" />
			{children}
		</section>
	);
}
