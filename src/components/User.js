import "./User.css";

const User = ({ img, name, contact = {}, role = "", desc = "", ContactComponent }) => {
  return (
    <div className="user-card py-4 px-2">
      <img src={img} alt="user-profile" className="profile-img img-circle rounded-50" />
      <div>
        <h3 className="text-white fw-bold">{name}</h3>
        <h5><span className="badge bg-primary d-block my-3 text-uppercase">{role}</span></h5>
        <p className="text-color-green ">{desc}</p>
      </div>
      <ContactComponent {...contact} />
    </div>
  );
};

export  default User;
