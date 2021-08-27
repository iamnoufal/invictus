import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import Layout from "components/Layout";
import AuthButton from "components/button/Auth";
import Loader from "components/Loader";

import { AppContext } from "contexts/app";

import homeLg from "assets/images/home_lg.png";
import homeMob from "assets/images/home_mob.png";

const HomePage = () => {
  const [pageLoading, setPageLoading] = useState(true);
  const { session, setSession } = useContext(AppContext);
  const history = useHistory();

  const handleAuthFailure = (response) => {
    const { errorCode, errorMessage } = response;
    alert(`${errorCode}: ${errorMessage}`);
  };

  const handleAuthSuccess = (response) => {
    setSession(response);
    setTimeout(() => history.push("/pass"), 0);
  };

  useEffect(() => {
    if (!session.loading) {
      setPageLoading(false);
    }
  }, [session]);

  return (
    <Layout>
      <div className="home-page py-5">
        {/* <h2 className="text-center text-white text-uppercase my-5 heading">Home page</h2> */}
        {/* <img
          src={homeLg}
          className="d-none d-md-block d-lg-block w-100 border-0 position-absolute"
          alt="home desktop"
        />
        <img src={homeMob} className="d-block d-md-none d-lg-none" alt="home mobile" /> */}
        <Loader loading={pageLoading}>
          <div className="">
            {session.accessToken ? (
              <h3 className="text-center text-white text-uppercase">
                Welcome to Invictus, {session.displayName}
              </h3>
            ) : (
              <div className="m-auto text-center my-2">
                <AuthButton onAuthSuccess={handleAuthSuccess} onAuthFailure={handleAuthFailure} />
              </div>
            )}
          </div>
        </Loader>
      </div>
    </Layout>
  );
};

export default HomePage;
