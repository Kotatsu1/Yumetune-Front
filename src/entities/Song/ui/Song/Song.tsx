import { Song } from "@/entities/Song/types";

const Song = ({ img, alt, title, artist, album, duration }: Song) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <button>play</button>
        <img className="rounded" src={img} alt={alt} />
        <p>{title}</p>
      </div>
      <p>{artist}</p>
      <p>{album}</p>
      <p>{duration}</p>
    </div>
  );
};

export default Song;
