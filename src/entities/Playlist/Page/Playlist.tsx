import { TPlaylist } from "../types";

const Playlist = ({
  title,
  artist,
  duration,
 
}: TPlaylist) => {

    return (
      <>
        <tr>
          <td className="pl-8">{title}</td>
          <td>{artist}</td>
          <td>{`${Math.floor(duration / 60)}:${(duration % 60)
            .toString()
            .padStart(2, "0")}`}</td>
        </tr>
      </>
    );
};

export default Playlist;