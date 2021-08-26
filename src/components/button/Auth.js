import { signIn } from "services/firebase";

const AuthButton = () => {
  const handleClick = () => {
    signIn();
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Sign in
    </button>
  );
};

export default AuthButton;
