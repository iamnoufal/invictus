import { signInFirebase } from "apis/firebase";

import { parseSessionData } from "helpers/auth";

const AuthButton = ({ onAuthSuccess, onAuthFailure }) => {
  const handleClick = async () => {
    const response = await signInFirebase();
    const { status } = response;
    if (status === "success") {
      let data = {};
      if (response.user) {
        data = parseSessionData(response.user);
      }
      return onAuthSuccess(data);
    }
    return onAuthFailure(response);
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Sign in
    </button>
  );
};

export default AuthButton;
