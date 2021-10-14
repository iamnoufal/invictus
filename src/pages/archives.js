import ArchiveList from "components/archives/List";

import Layout from "components/Layout";

const ArchivePage = () => {
  return (
    <Layout>
      <div className="events-list-page container px-0 py-5">
        <ArchiveList />
      </div>
    </Layout>
  );
};

export default ArchivePage;
