import { Song } from "@/entities/Song/types";
import useAxios from "@/interceptors";
import { useAppSelector } from "@/app/hooks";


const Song = ({
  id,
  selectedId,
  isPlaying,
  name,
  artist,
  duration,
  callback,
  callback2,
  callback3,
}: Song) => {
  const axiosRequest = useAxios();
  const { data } = useAppSelector((state) => state.songs);

  const addtoPlaylist = async (playlist_id: number, song_id: number) => {
    await axiosRequest.post(`/playlists/add-song`,
    {
      playlist_id: playlist_id,
      song_id: song_id,

    },
    {
      withCredentials: true,
    });
    
  }

  return (
    <>
      {id === selectedId && isPlaying === true ? (
        <svg
          onClick={() => callback(id)}
          className="fill-white absolute mt-2"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="20.000000pt"
          height="20.000000pt"
          viewBox="0 0 50.000000 50.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <path d="M120 250 l0 -170 50 0 50 0 0 170 0 170 -50 0 -50 0 0 -170z" />
            <path d="M280 250 l0 -170 50 0 50 0 0 170 0 170 -50 0 -50 0 0 -170z" />
          </g>
        </svg>
      ) : (
        <svg
          onClick={() => callback(id)}
          className="fill-white absolute mt-2"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="20.000000pt"
          height="20.000000pt"
          viewBox="0 0 50.000000 50.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path d="M100 250 c0 -104 3 -190 7 -190 10 0 323 184 323 190 0 6 -313 190 -323 190 -4 0 -7 -85 -7 -190z" />
          </g>
        </svg>
      )}

      <tr className={id == selectedId ? "bg-primary" : ""}>
        <td className="pl-8">{name}</td>
        <td>{artist}</td>
        <td>{`${Math.floor(duration / 60)}:${(duration % 60)
          .toString()
          .padStart(2, "0")}`}</td>
        <div className="dropdown dropdown-end">
          <label className="dropdown-toggle" tabIndex={0}>...</label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              {data.find((obj: any) => obj.id == id) ? (
                <button className="mt-2" onClick={() => callback3(id)}>
                  remove from library
                </button>
              ) : (
                <button className="mt-2" onClick={() => callback2(id)}>
                  add to library
                </button>
              )}
            </li>
            <li>
              {/* <button onClick={() => addtoPlaylist(4, id)}>
                add to playlist
              </button> */}


              <li>hello</li>



            </li>
          </ul>
        </div>
      </tr>
    </>
  );
};

export default Song;
