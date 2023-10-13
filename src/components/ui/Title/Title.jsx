const Title = ({ titleText, ...props }) => {
  return <h3{...props}>{titleText}</h3>;
};

export default Title;
