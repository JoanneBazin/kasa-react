import "../styles/components/Avatar.scss";

const Avatar = ({ img }) => {
  return (
    <div className="avatar-container">
      <img src={img} alt="Avatar de l'hôte" />
    </div>
  );
};

export default Avatar;
