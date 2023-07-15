import { Song } from "@/entities";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setPlayerState, setSelectedSong } from "@/features";

const Songs: FC = () => {
  const apiUrl = import.meta.env.VITE_APP_API;

  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.songs);
  const { isPlaying } = useAppSelector((state) => state.player);
  const selectedSong = useAppSelector((state) => state.player.selectedSong);


  const handleSelectSong = async (id: number) => {
    if (id == selectedSong && isPlaying == true) {
      dispatch(setPlayerState(false));
    } else if (id == selectedSong && isPlaying == false) {
      dispatch(setPlayerState(true));
    } else {
      dispatch(setPlayerState(false));
      const song: any = data.find((obj) => obj.id == id);
      localStorage.setItem("selectedSongId", song.id);
      localStorage.setItem(
        "selectedSong",
        `${apiUrl}/songs/${song.artist}-${song.title}/playlist.m3u8`,
      );
      dispatch(setSelectedSong(song.id));
      dispatch(setPlayerState(true));
      localStorage.setItem("currentSongName", song.artist + " - " + song.title);
    }
  };

  return (
    <>
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
                {data.map((song) => (
                  <Song
                    key={song.id}
                    id={song.id}
                    selectedId={selectedSong!}
                    isPlaying={isPlaying}
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
      </div>
    </>
  );
};

export default Songs;
