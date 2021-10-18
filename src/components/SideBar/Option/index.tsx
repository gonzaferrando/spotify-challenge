import { Link } from "@reach/router";
import { Playlist } from "../../../types/Playlist";

import "./index.css";

type OptionProps = {
  playlist: Playlist;
};

const Option = ({ playlist }: OptionProps) => {
  return (
    <Link to={`/playlist/${playlist.id}`} className="side-bar-list-item">
      <li className="item">
        <span>{playlist.name}</span>
      </li>
    </Link>
  );
};

export default Option;
