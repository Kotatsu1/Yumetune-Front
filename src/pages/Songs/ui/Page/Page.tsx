import { FC, useRef } from "react";
import ReactHlsPlayer from "react-hls-player";

const Songs: FC = () => {
  const playerRef = useRef();

  const handlePlay = () => {
    playerRef.current?.play();
  };

  const handlePause = () => {
    playerRef.current?.pause();
  };

  const toggleControls = () => {
    playerRef.current.controls = !playerRef.current?.controls;
  };

  return (
    <section>
      <div className="p-4">
        <h1 className="text-4xl text-white font-bold">Songs</h1>
        <ReactHlsPlayer
          src="http://localhost:8000/songs/Karna.val-Психушка/output.m3u8"
          autoPlay={false}
          controls={true}
          width="auto"
          height="100px"
          playerRef={playerRef}
        />
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={toggleControls}>Play</button>
      </div>
    </section>
  );
};

export default Songs;
