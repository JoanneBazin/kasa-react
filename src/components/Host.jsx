import Avatar from "./Avatar";
import "../styles/components/Host.scss";

const Host = ({ host }) => {
  const { name, picture } = host;
  const nameParts = name.split(" ");

  return (
    <div className="host-container">
      <div>
        <span>{nameParts[0]}</span>
        <br />
        <span>{nameParts[1]}</span>
      </div>
      <Avatar img={picture} />
    </div>
  );
};

export default Host;
