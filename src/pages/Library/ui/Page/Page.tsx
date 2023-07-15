import useAxios from "@/interceptors";
import { useEffect, useState } from "react";



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

  return (
    <>
      <div className="mt-10">
        {libraryData.map((song: any) => (
          <>
          <ul className="flex gap-5">
            <li>{song.title}</li>
            <li>{song.artist}</li>
            <li>{song.length}s</li>
            <li>{song.play_count}</li>
          </ul>
          </>
        ))}
      </div>
    </>
  );
};

export default Library;
