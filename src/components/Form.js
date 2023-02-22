import { useForm } from '@formcarry/react';

export default function MyFormcarry() {
	// Call the "useForm" hook in your function component
	const { state, submit } = useForm({
		id: 'HQ10vdZOcC'
	});

	// Success message
	if (state.submitted) {
		return <div>Thank you! We received your submission.</div>;
	}
	return (
		<form
			className="mx-auto mb-4 my-4 lg:mx-none grid grid-cols-2 w-full lg:w-[50%] border shadow-md rounded-xl p-12 bg-gray-100"
			onSubmit={submit}
		>
			<label htmlFor="user_name">Name</label>
			<input
				type="text"
				id="user_name"
				className="p-4 mb-4 border rounded-xl col-span-2 border-l-[#00013f] w-[90%] lg:w-[100%]"
				name="user_name"
				placeholder="Your Name"
			/>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				id="email"
				className="p-4 mb-4 border rounded-xl col-span-2 border-l-[#00013f] w-[90%] lg:w-[100%]"
				name="user_email"
				placeholder="Your email"
			/>
			<label htmlFor="message">Your Message:</label>
			<textarea
				name="message"
				id="message"
				rows="4"
				placeholder="Your message..."
				className="p-4 mb-4 border rounded-xl col-span-2 border-l-[#00013f] w-[90%] lg:w-[100%]"
			/>
			<button type="submit" className="bg-[#00013f] text-white rounded-xl p-4 w-[70%] lg:w-[50%] font-semibold">
				Send
			</button>
		</form>
	);
}
