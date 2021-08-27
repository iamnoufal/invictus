import { useContext } from "react";

import Layout from "components/Layout";
import AuthButton from "components/button/Auth";

import { AppContext } from "contexts/app";

const HomePage = () => {
  const { session, setSession } = useContext(AppContext);
  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };
  return (
    <Layout>
      <div className="home-page container">
        <h2 className="text-center text-white text-uppercase my-5 heading">Home page</h2>
        {session.accessToken ? (
          <h3 className="text-center text-white text-uppercase">
            Welcome to Invictus, {session.displayName}
          </h3>
        ) : (
          <div className="m-auto text-center my-2">
            <AuthButton onAuthSuccess={setSession} onAuthFailure={handleAuthFailure} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
