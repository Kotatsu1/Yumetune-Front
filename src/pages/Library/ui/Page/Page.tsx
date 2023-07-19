import useAxios from "@/interceptors";
import { useEffect, useState } from "react";
import { LibrarySong } from "@/entities";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setPlayerState, setSelectedSong } from "@/features";

const Library = () => {
  const [libraryData, setLibraryData] = useState([]);
  const axiosRequest = useAxios();
  const { data } = useAppSelector((state) => state.songs);
  const apiUrl = import.meta.env.VITE_APP_API;

  const dispatch = useAppDispatch();
  const { isPlaying } = useAppSelector((state) => state.player);
  const selectedSong = useAppSelector((state) => state.player.selectedSong);


  const handleSelectSong = async (id: number) => {
    if (id == selectedSong && isPlaying == true) {
      dispatch(setPlayerState(false));
    } else if (id == selectedSong && isPlaying == false) {
      dispatch(setPlayerState(true));
    } else {
      dispatch(setPlayerState(false));
      const song: any = data.find((obj: any) => obj.library_id== id);
      localStorage.setItem("selectedSongId", song.library_id);
      localStorage.setItem(
        "selectedSong",
        `${apiUrl}/songs/${song.artist}-${song.title}/playlist.m3u8`,
      );
      dispatch(setSelectedSong(song.library_id));
      dispatch(setPlayerState(true));
      localStorage.setItem("currentSongName", song.artist + " - " + song.title);
    }
  };


  return (
    <>
      <div className="p-4 h-full overflow-auto">
      <h1 className="text-4xl text-white font-bold">Library</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Artist</th>
                  <th>Duration</th>
                  <th>Play Count</th>
                </tr>
              </thead>
              <tbody>
                {data.map((song: any) => (
                  <LibrarySong
                    key={song.id}
                    library_id={song.library_id}
                    added_at={song.added_at}
                    play_count={song.play_count}
                    selectedId={selectedSong}
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
    </>
  );
};

export default Library;
