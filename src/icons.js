const Menu = ({ onclick }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" onClick={onclick}>
			<path fill="none" d="M0 0h24v24H0z" />
			<path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" fill="rgba(0,1,63,1)" />
		</svg>
	);
};

const Close = ({ onclick }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" onClick={onclick}>
			<path fill="none" d="M0 0h24v24H0z" />
			<path
				d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
				fill="rgba(0,1,63,1)"
			/>
		</svg>
	);
};

export { Menu, Close };
