import { AppContext } from "contexts/app";
import { useContext } from "react";

import YoutubeEmbed from "components/YoutubeEmbed.js";

import "./Card.css";
import Ribbon from "components/Ribbon";

const ArchiveCard = ({ name, desc, img, start = {}, end = {}, gform, rules, type = "", completed = false, yt }) => {
  const { session } = useContext(AppContext);
  const youtubeEmbedURL = "https://www.youtube.com/embed/"+yt
  return (
    <div className="archive-card card mx-4 mt-2 mb-3 p-0 rounded">
      <div className="row">
        <div className="">
          <div className="card-body m-auto text-center">
            <div className="name card-title text-uppercase text-white fw-bold mb-3">{name}</div>
            <YoutubeEmbed url={youtubeEmbedURL} />
            <div className="mt-3 description">{desc}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveCard;
