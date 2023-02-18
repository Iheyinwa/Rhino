export default function Card({ title }) {
	return (
		<div className="border border-[#e2e2e2] bg-[#00013f] lg:w-[300px] w-[250px] h-[150px] rounded-xl">
			<p className="font-semibold text-sm text-[#fff] mt-[25%] text-center">{title}</p>
			<hr className="border border-[#000000] mx-[40%]" />
		</div>
	);
}
