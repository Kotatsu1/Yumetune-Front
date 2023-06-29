import { Song } from "@/entities/Song/types";

const Song = ({ /*img, alt, */ name, artist, duration }: Song) => {
  return (
    <>
      <tr className="hover">
        {/* <th>{}</th> */}
        <td>
          {/* <img className="rounded" src={img} alt={alt} /> */}
          {name}
        </td>
        <td>{artist}</td>
        <td>{`${Math.floor(duration / 60)}:${duration % 60}`}</td>
      </tr>
    </>
  );
};

export default Song;
