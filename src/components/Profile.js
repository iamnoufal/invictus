const Profile = ({ name = "NITHYA SHREE M", email ="21f100000@student.onlinedegree.iitm.ac.in", house="Kaziranga" }) => {
  return <div className="user-profile text-center">
    <h2 className="text-white text-uppercase">{name}</h2>
    <h4 className="text-white text-lowercase">{email}</h4>
    <h5 className="text-white ">{house}</h5>
  </div>
}

export default Profile;
