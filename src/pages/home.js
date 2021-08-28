import Layout from "components/Layout";

const HomePage = () => {
  return (
    <Layout>
      <img
        src="https://rahman24.github.io/invictus/backup/main-desk.png"
        className="bg-img d-none d-md-block d-lg-block"
        alt="home page"
      />
      <img
        src="https://rahman24.github.io/invictus/backup/main-mob.png"
        className="bg-img d-block d-md-none d-lg-none"
        alt="home page"
      />
    </Layout>
  );
};

export default HomePage;
