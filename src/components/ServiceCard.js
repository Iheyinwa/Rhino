import { useState } from 'react';
import { Minus, Plus } from '../icons';

export default function ServiceCard({ title, content }) {
	const [ isActive, setIsActive ] = useState(false);
	return (
		<section className="border border-l-4 border-l-[#00013f] p-8 mx-12 rounded-xl mb-4 ">
			<div className="flex justify-between cursor-pointer" onClick={() => setIsActive(!isActive)}>
				<p>{title}</p>
				<div>{isActive ? <Minus /> : <Plus />}</div>
			</div>
			{isActive && <div className="p-4 bg-gray-100 rounded-xl">{content}</div>}
		</section>
	);
}
