import axios from "axios"
import { useState } from "react";

const Library = () => {

  const apiUrl = import.meta.env.VITE_APP_API;
  const [libraryData, setLibraryData] = useState([]);



  const tempLogin = async () => {
    await axios.post(`${apiUrl}/auth/login`,
    {
      login: 'kotatsu',
      password: 'zxasqw123',
    },
    {
      withCredentials: true,
    });
  }

  const tempRefresh = async () => {
    await axios.post(`${apiUrl}/auth/refresh`,
    {},
    {
      withCredentials: true,
    },);
  }

  const fetchLibrary = async () => {
    const response = await axios.get(`${apiUrl}/library/`,
    {
      withCredentials: true,
    },);
    setLibraryData(response.data);
  };



  return (
    <>

      <button className="block" onClick={tempLogin}>Login</button>
      <button className="block" onClick={tempRefresh}>Refresh</button>
      <button className="block" onClick={fetchLibrary}>fetchLibrary</button>

      <div className="mt-10">
        {libraryData.map((song: any) => (
          <p>{song.title}</p>
        ))}
      </div>

    </>
  )
}


export default Library