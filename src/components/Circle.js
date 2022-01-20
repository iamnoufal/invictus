import "./Circle.css";

export const Circle = ({ children, style, position }) => {
	return (
		<div className="circle" style={position}>
			<div className="circle-1" style={style}>
				<div className="circle-2">
					<div className="circle-3">
						<div className="circle-4">
							<div className="text-white text-center text-uppercase">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const SmallCircle = ({ style }) => {
	return (
		<div className="small-circle-1" style={style}>
			<div className="small-circle-2">
				<div className="small-circle-3">
					<div className="small-circle-4"></div>
				</div>
			</div>
		</div>
	)
}

export const ShadowCircle = ({ style }) => {
	return (<div className="shadow-circle" style={style}></div>)
}
