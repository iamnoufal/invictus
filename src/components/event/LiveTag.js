import { useContext, useEffect, useState } from "react";

import { listenEventChange } from "apis/firebase";

import { AppContext } from "contexts/app";

import "./LiveTag.css";

const EventLiveTag = () => {
  const [liveData, setLiveData] = useState();
  const { session } = useContext(AppContext);

  useEffect(() => {
    listenEventChange((data) => {
      if (data) {
        return setLiveData(data);
      }
    });
  }, [session]);
  const { live: isLive, link } = liveData || {};

  const tagClass = isLive ? "bg-color-aquagreen" : "bg-secondary";
  const tagText = isLive ? "Live Now" : "Live Soon";
  const shadowClass = isLive ? "shadow-live" : "shadow-disabled";
  const btnProps = session.accessToken ? { href: link, target: "_blank" } : { href: "/pass" };
  return (
    <a
      rel="noopener noreferrer"
      disabled={!isLive}
      className={`btn ${tagClass} px-4 rounded-pill ${shadowClass}`}
      {...btnProps}
    >
      {tagText}
    </a>
  );
};

export default EventLiveTag;
