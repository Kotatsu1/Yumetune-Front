import { Song } from "@/entities";
import { FC, useRef, useState, useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";
import axios from "axios";



const Songs: FC = () => {
  const playerRef: any = useRef();
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);
  const [songsData, setSongsData] = useState([]);
  // const volume = 80;
  // const time = 80;

  const apiUrl = import.meta.env.VITE_APP_API;


  useEffect(() => {
    const fetchData = async () => {
      
      const response = await axios.get(`${apiUrl}/songs/all`);
      setSongsData(response.data);
    };

    fetchData();
  }, []);



  // const [selectedSong, setSelectedSong] = useState<string | null>(null);

  // const handleSongSelect = (artist: string, title: string) => {
  //   setSelectedSong(`${apiUrl}/songs/${artist}-${title}/output.m3u8`);
  // };


  const handlePlay = () => {
    if (play == false) {
      playerRef.current?.play();
      setPlay(true);
    } else {
      playerRef.current?.pause();
      setPlay(false);
    }
  };

  const handleMute = () => {
    if (mute == false) {
      playerRef.current.muted = true;
      setMute(true);
    } else {
      playerRef.current.muted = false;
      setMute(false);
    }
  };

  const handleVolumeDown = () => {
    playerRef.current.volume -= 0.05;
  };

  const handleVolumeUp = () => {
    playerRef.current.volume += 0.05;
  };

  // const timeSlider = () => {
  //   const currentTime = playerRef.current.duration * (time / 100);
  //   playerRef.currentTime = time;
  // };

  // cosnt;




  return (
    <section>
      <div className="h-calc(100vh-68px)">
        <div className="p-4">
          <h1 className="text-4xl text-white font-bold">Songs</h1>
          <div className="flex flex-col">
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Artist</th>
                    <th>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {songsData.map((song: any) => (
                    <Song
                      key={song.id}
                      name={song.title}
                      artist={song.artist}
                      duration={song.length}
                      />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <ReactHlsPlayer
            className=""
            src={`${apiUrl}/songs/BoyWithUke-LoveSick/output.m3u8`}
            autoPlay={false}
            controls={true}
            width="auto"
            height="100px"
            playerRef={playerRef}
          />
        </div>
        <div className="p-3 gap-x-2 flex absolute bg-neutral items-center justify-center w-full bottom-0">
          <button
            className="btn btn-neutral text-2xl font-bold"
            onClick={handleVolumeDown}
          >
            -
          </button>
          <label className="swap items-center justify-center">
            <input type="checkbox" onClick={handlePlay} />
            <svg
              className="swap-on w-12 h-12 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="50.000000pt"
              height="50.000000pt"
              viewBox="0 0 50.000000 50.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
                fill="#fff"
                stroke="none"
              >
                <path d="M120 250 l0 -170 50 0 50 0 0 170 0 170 -50 0 -50 0 0 -170z" />
                <path d="M280 250 l0 -170 50 0 50 0 0 170 0 170 -50 0 -50 0 0 -170z" />
              </g>
            </svg>
            <svg
              className="swap-off w-12 h-12 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="50.000000pt"
              height="50.000000pt"
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
          </label>
          <label className="swap">
            <input
              className="btn w-12 h-12 btn-neutral"
              type="checkbox"
              onClick={handleMute}
            />
            <svg
              className="swap-off scale-75 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" />
            </svg>
            <svg
              className="swap-on scale-75 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
            >
              <path d="M3,9H7L12,4V20L7,15H3V9M16.59,12L14,9.41L15.41,8L18,10.59L20.59,8L22,9.41L19.41,12L22,14.59L20.59,16L18,13.41L15.41,16L14,14.59L16.59,12Z" />
            </svg>
          </label>
          <button
            className="btn btn-neutral text-2xl font-bold"
            onClick={handleVolumeUp}
          >
            +
          </button>
        </div>
      </div>
    </section>
  );
};

export default Songs;
