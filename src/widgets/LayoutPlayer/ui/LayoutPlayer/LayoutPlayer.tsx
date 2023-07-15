import { FC, useState, useEffect } from "react";
import ReactHlsPlayer from "react-hls-player";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setPlayerState, setSelectedSong } from "@/features";
import { usePlayer } from "../../usePlayer";
import { setData } from "@/features";
import axios from "axios";

const LayoutPlayer: FC = () => {
  const apiUrl = import.meta.env.VITE_APP_API;
  const { playerRef }: any = usePlayer();
  const [mute, setMute] = useState(false);
  const [loop, setLoop] = useState(true);
  const [volume, setVolume] = useState(0.1);
  const [duration, setDuration] = useState(0);
  const [currentTime, setTime] = useState(0);
  const [currentSongName, setCurrentSongName] = useState("");

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.songs);
  const { isPlaying } = useAppSelector((state) => state.player);

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        setTime(playerRef.current.currentTime);
        setDuration(playerRef.current.duration);
      }
    }, 500);

    playerRef.current.volume = 0.1;

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const kak = localStorage.getItem("selectedSongId") as number | null;
    dispatch(setSelectedSong(+kak!));
  }, []);

  useEffect(() => {
    if (isPlaying == false) {
      playerRef.current?.pause();
    } else {
      playerRef.current?.play();
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${apiUrl}/songs/all`);
      dispatch(setData(response.data));
    };

    fetchData();
  }, []);


  useEffect(() => {
    setCurrentSongName(localStorage.getItem("currentSongName") as string);
  })

  const handlePlay = () => {
    if (isPlaying == false) {
      playerRef.current?.play();
      dispatch(setPlayerState(true));
    } else {
      playerRef.current?.pause();
      dispatch(setPlayerState(false));
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
  };

  // function sleep(ms: number) {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // }

  const handleNextSong = async () => {
    const song: any = data.findIndex(
      (obj) =>
        obj.id == parseInt(localStorage.getItem("selectedSongId") as string),
    );
    const nextSong: any = data[song + 1];
    localStorage.setItem(
      "selectedSong",
      `${apiUrl}/songs/${nextSong.artist}-${nextSong.title}/playlist.m3u8`,
    );
    localStorage.setItem("selectedSongId", nextSong.id);
    dispatch(setSelectedSong(nextSong.id));
    // await sleep(1000);
    // playerRef.current.play();
    dispatch(setPlayerState(true));
    localStorage.setItem("currentSongName", nextSong.artist + " - " + nextSong.title);
  };

  const handlePrevSong = async () => {
    const song: any = data.findIndex(
      (obj) =>
        obj.id == parseInt(localStorage.getItem("selectedSongId") as string),
    );
    const prevSong: any = data[song - 1];
    localStorage.setItem(
      "selectedSong",
      `${apiUrl}/songs/${prevSong.artist}-${prevSong.title}/playlist.m3u8`,
    );
    localStorage.setItem("selectedSongId", prevSong.id);
    dispatch(setSelectedSong(prevSong.id));
    // await sleep(1000);
    // playerRef.current.play();
    dispatch(setPlayerState(true));
    localStorage.setItem("currentSongName", prevSong.artist + " - " + prevSong.title);
  };

  const handleLoop = () => {
    if (loop == false) {
      setLoop(true);
    } else {
      setLoop(false);
    }
  };

  return (
    <section className="w-full">
      <ReactHlsPlayer
        className="hidden"
        src={localStorage.getItem("selectedSong") as string}
        autoPlay={false}
        controls={false}
        loop={loop}
        width="auto"
        height="100px"
        playerRef={playerRef}
      />
      
      <div className="p-3 gap-x-2 flex items-center justify-center w-full">
      
        <div>
          {`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)
            .toString()
            .padStart(2, "0")}`}{" "}
          /
          {` ${Math.floor(duration / 60)}:${Math.floor(duration % 60)
            .toString()
            .padStart(2, "0")}`}
        </div>

        <svg
          onClick={handlePrevSong}
          className="w-10 h-10 cursor-pointer"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <path
              d="M2239 4261 c-20 -4 -53 -16 -75 -27 -53 -26 -1639 -1275 -1687 -1327
          -174 -193 -164 -532 20 -711 32 -30 416 -337 853 -681 858 -675 836 -660 958
          -658 141 2 285 131 343 308 9 29 14 163 18 501 l6 460 785 -618 c610 -480 796
          -622 835 -635 74 -25 163 -21 229 11 108 53 211 195 236 325 14 74 14 2628 0
          2702 -25 130 -128 272 -236 325 -66 32 -155 36 -229 11 -38 -13 -232 -160
          -835 -636 l-785 -618 -6 461 c-4 338 -9 472 -18 501 -39 118 -134 236 -225
          279 -57 27 -132 38 -187 27z"
            />
          </g>
        </svg>

        <button onClick={handlePlay}>
          {isPlaying ? (
            <svg
              className="w-12 h-12 fill-white"
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
          ) : (
            <svg
              className="w-12 h-12 fill-white"
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
          )}
        </button>

        <svg
          onClick={handleNextSong}
          className="w-10 h-10 cursor-pointer"
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#ffffff"
            stroke="none"
          >
            <path
              d="M650 4257 c-26 -7 -62 -23 -81 -35 -53 -32 -133 -122 -164 -182 -56
          -110 -55 -75 -55 -1480 0 -1406 -1 -1369 55 -1481 38 -73 126 -163 194 -196
          77 -38 172 -38 251 1 31 15 387 288 825 634 l770 608 6 -461 c4 -337 9 -471
          18 -500 39 -120 133 -235 230 -282 81 -40 177 -39 255 2 88 47 1664 1294 1708
          1353 142 185 142 459 0 644 -44 58 -1619 1306 -1707 1352 -78 41 -176 42 -256
          3 -97 -47 -191 -162 -230 -282 -9 -29 -14 -163 -18 -501 l-6 -460 -525 413
          c-289 228 -637 503 -775 611 -137 108 -270 207 -295 219 -57 28 -142 36 -200
          20z"
            />
          </g>
        </svg>
        <div style={{ width: "30%" }}>
          <input
            type="range"
            className="range range-sm range-primary mt-1"
            value={currentTime}
            min="0"
            max={duration}
            step={0.01}
            onChange={durationSlider}
          />
          <div className="text-xs absolute">{currentSongName}</div>
        </div>
        <button onClick={handleLoop}>{loop ? "Loop On" : "Loop Off"}</button>
        <button onClick={handleMute}>{mute ? "Mute On" : "Mute Off"}</button>

        <input
          type="range"
          className="range range-xs range-primary w-28"
          value={volume}
          min="0"
          max="1"
          step={0.01}
          onChange={volumeSlider}
        />
      </div>
    </section>
  );
};

export default LayoutPlayer;
