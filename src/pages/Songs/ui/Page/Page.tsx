import ReactHlsPlayer from 'react-hls-player';


// const AllSongs = [
//   {
//     id: 1,
//     title: "Song Title",
//     artist: "Artist Name",
//     album: "Album Name",
//     duration: "Duration",
//   },
//   {
//     id: 2,
//     title: "Song Title",
//     artist: "Artist Name",
//     album: "Album Name",
//     duration: "Duration",
//   },
// ];


// const Songs = () => {
//   return (
//     <div>
//       <h1>{AllSongs.map((s) => s.title)}</h1>
//     </div>
//   );
// };

const SongPlayer: React.FC<{ url: string }> = ({ url }) => {
  return (
    <div>
      <ReactHlsPlayer
        src={url}
        autoPlay={false}
        controls={true}
        width="auto"
        height="auto"
        playerRef={undefined}
      />
    </div>
  );
};


const urls = [
  {
    url: "http://localhost:8000/songs/123-123/output.m3u8",
  },
  {
    url: "http://localhost:8000/songs/Мышь-Жвачка/output.m3u8",
  },
];


const Songs: React.FC = () => {

  return (
    <div>
      {urls.map((url) => (
        <SongPlayer url={url.url} />
      ))}
    </div>
  );
};

export default Songs;
