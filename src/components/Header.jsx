

const Header = (props) => {
  return (
    <header className="header">
        <div className="header-container">
            <div className="header-container-bg">
                <img src={props.image} alt="" />
            </div>
            <div className="header-container-content">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    </header>
  );
};

export default Header;