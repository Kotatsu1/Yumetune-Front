import { Song } from "@/entities/Song/types";

const Song = ({
  id,
  selectedId,
  isPlaying,
  name,
  artist,
  duration,
  callback,
}: Song) => {
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
        <td>
          {"ㅤㅤ"}
          {name}
        </td>
        <td>{artist}</td>
        <td>{`${Math.floor(duration / 60)}:${(duration % 60)
          .toString()
          .padStart(2, "0")}`}</td>
      </tr>
    </>
  );
};

export default Song;
