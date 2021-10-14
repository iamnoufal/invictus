import { useState, useEffect, useContext } from "react";

import { getEvents } from "apis/firebase";

import ArchiveCard from "./Card";
import Loader from "components/Loader";

import { getArchives } from "helpers/event";

import { AppContext } from "contexts/app";

import "./List.css";

const ArchiveList = () => {
  const [loadingArchives, setLoadingArchives] = useState(true);
  const [archives, setArchives] = useState({});
  const { session } = useContext(AppContext);

  useEffect(() => {
    /*eslint no-undef: "off"*/
    getEvents()
      .then((response = []) => {
        const eventsObj = getArchives(response);
        setArchives(eventsObj);
        setLoadingArchives(false);
      })
      .catch((err) => {
        setLoadingArchives(false);
        throw err;
      });
  }, []);

  const archiveList = archives[true] || [];
  console.log(archives)

  return (
    <div className="events-list">
      <h1 className="text-center text-white mb-5 heading text-uppercase">Invictus 2021</h1>
      <h4 className="text-center text-uppercase text-white mx-5 mb-5">August 28, 2021 to September 05, 2021</h4>
      <Loader loading={loadingArchives}>
        <div className="m-auto justify-content-center d-flex event-card-list">
          {archiveList.map((eventObj) => (
            <ArchiveCard key={eventObj.desc} {...eventObj} />
          ))}
          {archiveList.length === 0 && (
            <h4 className="text-center text-uppercase text-white m-auto">
              There are no events in this category yet
            </h4>
          )}
        </div>
      </Loader>
    </div>
  );
};

export default ArchiveList;
