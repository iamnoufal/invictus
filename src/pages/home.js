import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import Layout from "components/Layout";
import AuthButton from "components/button/Auth";

import { AppContext } from "contexts/app";
import Loader from "components/Loader";

const HomePage = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const { session, setSession } = useContext(AppContext);
  const history = useHistory();

  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };

  useEffect(() => {
    if (!session.loading) {
      setPageLoading(false);
    }
    if (session.accessToken) {
      history.push("/pass");
    }
  }, [session, history]);

  return (
    <Layout>
      <div className="home-page container">
        <h2 className="text-center text-white text-uppercase my-5 heading">Home page</h2>
        <Loader loading={pageLoading}>
          {session.accessToken ? (
            <h3 className="text-center text-white text-uppercase">
              Welcome to Invictus, {session.displayName}
            </h3>
          ) : (
            <div className="m-auto text-center my-2">
              <AuthButton onAuthSuccess={setSession} onAuthFailure={handleAuthFailure} />
            </div>
          )}
        </Loader>
      </div>
    </Layout>
  );
};

export default HomePage;
