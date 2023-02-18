import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Form() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('rhinospine_service', 'contact_form', form.current, 't0LUiQUyNh5dMeP94').then(
			(result) => {
				alert('Email successfully sent');
			},
			(error) => {
				alert('Please resend email');
			}
		);
		e.target.reset();
	};

	return (
		<form
			ref={form}
			className="mx-auto mb-4 my-4 lg:mx-none grid grid-cols-2 w-full lg:w-[50%] border shadow-md rounded-xl p-12 bg-gray-100"
			onSubmit={sendEmail}
		>
			<label>Name</label>
			<input
				type="text"
				className="p-4 mb-4 border rounded-xl col-span-2 border-l-[#00013f] w-[70%] lg:w-[100%]"
				name="user_name"
				placeholder="Your Name"
			/>
			<label>Email</label>
			<input
				type="email"
				className="p-4 mb-4 border rounded-xl col-span-2 border-l-[#00013f] w-[70%] lg:w-[100%]"
				name="user_email"
				placeholder="Your email"
			/>
			<label>Your Message:</label>
			<textarea
				name="message"
				rows="4"
				placeholder="Your message..."
				className="p-4 mb-4 border rounded-xl col-span-2 border-l-[#00013f] w-[70%] lg:w-[100%]"
			/>
			<button type="submit" className="bg-[#00013f] text-white rounded-xl p-4 w-[70%] lg:w-[50%] font-semibold">
				Send
			</button>
		</form>
	);
}
