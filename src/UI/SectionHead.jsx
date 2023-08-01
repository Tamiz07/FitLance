

const SectionHead = (props) => {
  return (
    <div className={`section-head ${props.className}`}>
        <span>{props.icon}</span>
        <h2>{props.title}</h2>
    </div>
  );
};

export default SectionHead;