const Article = ({ children, ...props }) => {
  return <article {...props}>{children}</article>;
};

export default Article;
