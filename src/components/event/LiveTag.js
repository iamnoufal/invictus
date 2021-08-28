import { useContext, useEffect, useState } from "react";

import { listenEventChange } from "apis/firebase";

import { AppContext } from "contexts/app";

import "./LiveTag.css";

const EventLiveTag = () => {
  const [isLive, setIsLive] = useState(false);
  const { session } = useContext(AppContext);

  useEffect(() => {
    if (session.accessToken) {
      listenEventChange((data) => {
        if (data) {
          return setIsLive(true);
        }
        return setIsLive(false);
      });
    }
  }, [session]);

  const tagClass = isLive ? "bg-color-aquagreen" : "bg-secondary";
  const tagText = isLive ? "Live Now" : "Live Soon";
  const shadowClass = isLive ? "shadow-live" : "shadow-disabled";
  return (
    <button className={`btn ${tagClass} px-4 rounded-pill ${shadowClass}`} readOnly>
      {tagText}
    </button>
  );
};

export default EventLiveTag;
