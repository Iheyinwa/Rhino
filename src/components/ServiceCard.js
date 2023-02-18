import { useState } from 'react';
import { Plus } from '../icons';

export default function ServiceCard({ service }) {
	const [ state, setState ] = useState(false);
	function onclick() {
		setState(!state);
	}
	return (
		<div className="border border-l-4 border-l-[#00013f] p-8 mx-12 rounded-xl mb-4 flex justify-between">
			<p>{service}</p>
			<Plus onclick={onclick} />
		</div>
	);
}
