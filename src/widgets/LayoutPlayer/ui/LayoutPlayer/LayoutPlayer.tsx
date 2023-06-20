// import ReactHlsPlayer from "react-hls-player";

// const SongPlayer: React.FC<{ url: string }> = ({ url }) => {
//   return (
//     <div>
//       <ReactHlsPlayer
//         src={url}
//         autoPlay={false}
//         controls={true}
//         width="auto"
//         height="auto"
//         playerRef={undefined}
//       />
//     </div>
//   );
// };

// const urls = [
//   {
//     url: "http://localhost:8000/songs/123-123/output.m3u8",
//   },
//   {
//     url: "http://localhost:8000/songs/Мышь-Жвачка/output.m3u8",
//   },
// ];

{
  /* {urls.map((url) => (
        <SongPlayer url={url.url} />
      ))} */
}

const LayoutPlayer = () => {
  return (
    <>
      <div className="absolute bottom-0">
        <div className="flex gap-x-3">
          <button>back</button>
          <button>play/pause</button>
          <button>next</button>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LayoutPlayer;
