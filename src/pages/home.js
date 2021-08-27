import { useContext } from "react";

import Layout from "components/Layout";
import AuthButton from "components/button/Auth";

import { AppContext } from "contexts/app";

const HomePage = () => {
  const { session, setSession } = useContext(AppContext);
  return (
    <Layout>
      <div className="home-page container">
        <h2>Home page</h2>
        {!session.token && <AuthButton onAuthSuccess={setSession} />}
      </div>
    </Layout>
  );
};

export default HomePage;
