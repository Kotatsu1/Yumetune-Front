import useAxios from "@/interceptors";
import { useEffect, useState } from "react";
import { LibrarySong } from "@/entities";

const Library = () => {
  const [libraryData, setLibraryData] = useState([]);
  const axiosRequest = useAxios();

  const fetchLibrary = async () => {
    const response = await axiosRequest.get(`/library/`, {
      withCredentials: true,
    });
    setLibraryData(response.data);
  };

  useEffect(() => {
    fetchLibrary();
  }, []);


  const dummy = () => {
    return "안녕하세요";
  }

  return (
    <>
      <div className="mt-10">
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
                {libraryData.map((song: any) => (
                  <LibrarySong
                    key={song.id}
                    library_id={song.library_id}
                    added_at={song.added_at}
                    play_count={song.play_count}
                    selectedId={song.id}
                    isPlaying={false}
                    name={song.title}
                    artist={song.artist}
                    duration={song.length}
                    callback={dummy}
                  />
                ))}
              </tbody>
            </table>
      </div>
    </>
  );
};

export default Library;
