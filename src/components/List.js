export default function List({ item }) {
	return (
		<li className="p-8 relative">
			<span className="absolute left-[20%] hover:w-[60%] transition-all h-1 hover:bg-blue-400" />
			<p className="p-4">{item}</p>
			<span className="absolute left-[20%] hover:w-[60%] transition-all h-1 hover:bg-blue-400" />
		</li>
	);
}
