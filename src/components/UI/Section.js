const Section = (props) => {
  const classes = props.className;
  return (
    <div className="column">
      <div className="box">{props.children}</div>
    </div>
  );
};

export default Section;
