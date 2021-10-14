import Layout from "components/Layout";

import deskbg from "assets/images/main-desk.webp";
import mobbg from "assets/images/main-mob.webp";

const HomePage = () => {
  return (
    <Layout>
      <img
        src={deskbg}
        className="bg-img d-none d-md-block d-lg-block"
        alt="home page"
      />
      <img
        src={mobbg}
        className="bg-img d-block d-md-none d-lg-none"
        alt="home page"
      />
    </Layout>
  );
};

export default HomePage;
