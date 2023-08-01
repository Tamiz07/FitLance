import Card from "../UI/Card";

const Trainer = (props) => {
  return (
    <Card className="trainer">
        <div className="trainer-image">
            <img src={props.image} alt="" />
        </div>
        <h3>{props.name}</h3>
        <p>{props.job}</p>
        <div className="trainer-socials">
            {
                props.socials.map(({icon, link}, index) => {
                    return <a href={link} key={index} target="_blank" rel="noreferrer noopener">{icon}</a>
                })
            }
        </div>
    </Card>
  );
};

export default Trainer;