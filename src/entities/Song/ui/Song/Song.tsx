import { Song } from "@/entities/Song/types";

const Song = ({ /*img, alt, */ name, artist, album, duration }: Song) => {
  return (
    <>
      <tr className="hover">
        {/* <th>{}</th> */}
        <td>
          {/* <img className="rounded" src={img} alt={alt} /> */}
          {name}
        </td>
        <td>{artist}</td>
        <td>{album}</td>
        <td>{Math.round(duration / 60)}</td>
      </tr>
    </>
  );
};

export default Song;
