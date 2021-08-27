import { useContext, useEffect, useState } from "react";

import { listenEventChange } from "apis/firebase";

import { AppContext } from "contexts/app";

const EventLiveTag = () => {
  const [isLive, setIsLive] = useState(false);
  const { session } = useContext(AppContext);

  useEffect(() => {
    listenEventChange((data) => {
      if(data) {
        return setIsLive(true)
      }
      return setIsLive(false);
    })
  }, [session]);

  const tagClass = isLive ? "bg-color-aquagreen" : "bg-secondary";

  return (
    <span className={`btn ${tagClass} px-4 rounded-pill`} readOnly>
      Live
    </span>
  );
};

export default EventLiveTag;
