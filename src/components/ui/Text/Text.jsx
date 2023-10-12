const Text = ({text, ...props }) => {
	return (
		<p{...props}>{text }</p>
	)
}

export default Text