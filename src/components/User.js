import "./User.css";

const User = ({ img, name, contact = {}, role = "", desc = "", ContactComponent }) => {
  return (
    <div className="user-card p-4 rounded">
      <img src={img} alt="user-profile" className="profile-img rounded" />
      <div>
        <h3 className="text-white fw-bold mt-3">{name}</h3>
        <h5><span className="badge my-2 text-uppercase">{role}</span></h5>
        <p className="text-white text-justify">{desc}</p>
      </div>
      <ContactComponent {...contact} />
    </div>
  );
};

export  default User;
