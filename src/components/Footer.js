import Rhinospine from '../images/RHINOSPINE NO BG SINGLE.png';
export default function Footer() {
	return (
		<footer className="grid lg:grid-cols-3 grid-cols-2 bg-[#000000] items-center pb-12 gap-4 text-white">
			<div>
				<img src={Rhinospine} alt="Rhinospine" width={400} height={300} />
			</div>
			<div>
				<form>
					<input />
					<button type="Submit">Send</button>
				</form>
			</div>
			<div>
				<p>We're on Social Media</p>
			</div>
		</footer>
	);
}
