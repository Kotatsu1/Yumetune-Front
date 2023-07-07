import { Song } from "@/entities";
import { FC, useRef, useState, useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";
import axios from "axios";



const Songs: FC = () => {
  const playerRef: any = useRef();
  const [mute, setMute] = useState(false);
  const [play, setPlay] = useState(false);
  const [loop, setLoop] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [songsData, setSongsData] = useState([]);
  const [duration, setDuration] = useState(0);
  const [currentTime, setTime] = useState(0);
  const [selectedSong, setSelectedSong] = useState("");

  const apiUrl = import.meta.env.VITE_APP_API;


  useEffect(() => {


    setInterval(() => {
      if (playerRef.current) {
        setTime(playerRef.current.currentTime);
        setDuration(playerRef.current.duration);
      }
    }, 1000);

    
    const fetchData = async () => {
      
      const response = await axios.get(`${apiUrl}/songs/all`);
      setSongsData(response.data);
    };

    fetchData();

    playerRef.current.volume = 0.1
    
  }, []);


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


  const volumeSlider = (event: any) => {
    setVolume(event.target.value);
    playerRef.current.volume = event.target.value;
  };


  const durationSlider = (event: any) => {
    setTime(event.target.value);
    playerRef.current.currentTime = event.target.value;
  }


  const handleSelectSong = async (artist: string, title: string) => {
    await setSelectedSong(`${apiUrl}/songs/${artist}-${title}/output.m3u8`);
    playerRef.current.play();
    setPlay(true);
    
  };

  const handleLoop = () => {
    if (loop == false) {
      setLoop(true);
    } else {
      setLoop(false);
    }
  }

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
                      callback={handleSelectSong}
                      />
                  ))} 
                </tbody>
              </table>
            </div>
          </div>
          <ReactHlsPlayer
            className=""
            src={selectedSong}
            autoPlay={false}
            controls={false}
            loop={loop}
            width="auto"
            height="100px"
            playerRef={playerRef}
          />
        </div>
        <div className="p-3 gap-x-2 flex absolute bg-neutral items-center justify-center w-full bottom-0">
        <div>{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, "0")}`} / 
        {` ${Math.floor(duration / 60)}:${Math.floor(duration % 60).toString().padStart(2, "0")}`}</div>
        <button onClick={handlePlay}>
          {
            play ?
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
            : 
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
        }
        </button>

        <input type="range" 
               className="range range-sm range-primary" 
               style={{ width: "30%" }} 
               value={currentTime} 
               min="0" 
               max={duration} 
               step={0.01} 
               onChange={durationSlider}
        />

        <button onClick={handleLoop}>{loop ? "Loop On" : "Loop Off"}</button>
        <button onClick={handleMute}>{mute ? "Mute On" : "Mute Off"}</button>

        <input type="range" 
               className="range range-xs range-primary" 
               style={{ width: "100px" }} 
               value={volume} 
               min="0" 
               max="1" 
               step={0.01} 
               onChange={volumeSlider}/>
        </div>
      </div>
    </section>
  );
};

export default Songs;
