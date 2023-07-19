import { Song } from "@/entities";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { setPlayerState, setSelectedSong } from "@/features";
import { useEffect } from "react";
import useAxios from "@/interceptors";
import { useState } from "react";

const Songs: FC = () => {
  const apiUrl = import.meta.env.VITE_APP_API;

  const dispatch = useAppDispatch();

  const [allSongs, setAllSongs] = useState([]);
  const { isPlaying } = useAppSelector((state) => state.player);
  const selectedSong = useAppSelector((state) => state.player.selectedSong);
  const axiosRequest = useAxios();


  const handleSelectSong = async (id: number) => {
    if (id == selectedSong && isPlaying == true) {
      dispatch(setPlayerState(false));
    } else if (id == selectedSong && isPlaying == false) {
      dispatch(setPlayerState(true));
    } else {
      dispatch(setPlayerState(false));
      const song: any = allSongs.find((obj: any) => obj.id == id);
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

  const addToLibrary = async (id: number) => {
    await axiosRequest.post(`/library/add`,
    {
      song_id: id,
    },
    {
      withCredentials: true,
    });
  }

  const removeFromLibrary = async (id: number) => {
    await axiosRequest.post(`/library/remove`,
    {
      song_id: id,
    },
    {
      withCredentials: true,
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosRequest.get(`/songs/all`,
      {
        withCredentials: true,
      },);
      setAllSongs(response.data);
      // dispatch(setData(response.data));
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="p-4 h-5/6 w-2/5 overflow-auto">
        <input
          type="text"
          className="input input-bordered input-primary w-full max-w-xs"
          placeholder="Search existing"
        />
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
                {allSongs.map((song: any) => (
                  <Song
                    key={song.id}
                    id={song.id}
                    selectedId={selectedSong!}
                    isPlaying={isPlaying}
                    name={song.title}
                    artist={song.artist}
                    duration={song.length}
                    callback={handleSelectSong}
                    callback2={addToLibrary}
                    callback3={removeFromLibrary}
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
