type DotSpinner = {
	ratio: number;
	message: string;
};

const DotSpinner = ({ ratio, message }: DotSpinner) => {
	const newSize = ratio / 100;
	const cssValues = {
		'--newSize': newSize,
	} as React.CSSProperties;

	return (
		<div className="dotspinner" style={cssValues}>
			<p className="loader-label" aria-hidden="false">
				{message}
			</p>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
			<div aria-hidden="true"></div>
		</div>
	);
};

export default DotSpinner;
