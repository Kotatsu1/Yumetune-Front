import { ISong } from "@/entities/Song/types";

const Song = ({ img, alt, title, artist, album, duration }: ISong) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <img src={img} alt={alt} />
        {title}
      </div>
      <p>{artist}</p>
      <p>{album}</p>
      <p>{duration}</p>
    </div>
  );
};

export default Song;
