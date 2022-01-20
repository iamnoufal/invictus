import { useEffect, useState } from "react";

import { getTeamDetails } from "apis/firebase";

import Layout from "components/Layout";
import Loader from "components/Loader";
import User from "components/User";
import Contact from "components/Contact";

import comingSoon from "assets/images/coming_soon.webp";

const TeamPage = () => {
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
  useEffect(() => {
    getTeamDetails()
      .then((members) => {
        setMembers(members);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <Layout>
      <div className="container team-page">
        <Loader loading={loading}>
          {members.length && (
            <h1 className="text-white my-5 text-center heading text-uppercase">Our Team</h1>
          )}
          <div className="m-auto text-center justify-content-center my-5 d-flex flex-wrap">
            {!members.length && (
              <img className="img img-fluid" src={comingSoon} alt="Coming soon" />
            )}

            {members.map((member) => (
              <User key={member.name} {...member} ContactComponent={Contact} />
            ))}
          </div>
        </Loader>
      </div>
    </Layout>
  );
};

export default TeamPage;
