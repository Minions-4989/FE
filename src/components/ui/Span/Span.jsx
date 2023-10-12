const Span = ({text, ...props }) => {
	return (
		<span{...props}>{text }</span>
	)
}

export default Span