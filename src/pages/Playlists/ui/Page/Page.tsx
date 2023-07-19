import useAxios from "@/interceptors";
import { useEffect, useState } from "react";
import { Playlist } from "@/entities/Playlist";


const Playlists = () => {
  const axiosRequest = useAxios();
  const [playlistsList, setPlaylistsList] = useState([]);
  const [playlistContent, setPlaylistContent] = useState([]);
  const [openedPlaylistName, setOpenedPlaylistName] = useState('');

  useEffect(() => {
    fetchPlaylists();
  },[])


  interface CustomWindow extends Window {
    playlist_content_modal: {
      showModal: () => void;
    };
  }

  const openPlaylistModal = (playlistId: string, playlistName: string) => {
    (window as unknown as CustomWindow).playlist_content_modal.showModal();
    fetchPlaylistContent(playlistId);
    setOpenedPlaylistName(playlistName);
}

  const fetchPlaylists = async () => {
    const respose = await axiosRequest.get(`/playlists/all`,
    {
      withCredentials: true,
    });
    setPlaylistsList(respose.data);
  }

  const fetchPlaylistContent = async (playlistId: string) => {
    const respose = await axiosRequest.post(`/playlists/content`,
    {
      playlist_id: playlistId,
    },
    {
      withCredentials: true,
    });
    setPlaylistContent(respose.data);
    
  }

  const createPlaylist = async (name: string) => {
    await axiosRequest.post(`/playlists/create`,
    {
      name: name,
    },
    {
      withCredentials: true,
    });

  }
    return (
      <>
        <h1 className="text-4xl text-white font-bold p-4">Playlists</h1>
        <div className="w-5/6 h-full overflow-auto mx-auto">
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            <div
              className="border w-56 h-56 pb-full cursor-pointer flex items-center justify-center rounded text-xl text-center bg-secondary text-black"
              //onClick={() => createPlaylist('')}
            >
              Create Playlist
            </div>
            {playlistsList.map((playlist: any) => (
              <div
                className="border w-56 h-56 pb-full cursor-pointer flex items-center justify-center rounded text-xl text-center"
                key={playlist.id}
                onClick={() =>
                  openPlaylistModal(playlist.playlist_id, playlist.name)
                }
              >
                {playlist.name}
              </div>
            ))}
          </div>
        </div>
        <dialog id="playlist_content_modal" className="modal">
          <form method="dialog" className="modal-box h-4/5">
            <div className="flex mb-10">
              <div>
                <img
                  src="https://i.imgur.com/rPhZxKR.jpeg"
                  alt=""
                  className="w-32 h-32"
                />
              </div>
              <div className="ml-4 flex flex-col justify-between">
                <div>{openedPlaylistName}</div>
                <div className="cursor-pointer">
                  <div>Edit</div>
                  <div>Delite</div>
                </div>
              </div>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Artist</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {playlistContent.map((song: any) => (
                  <Playlist
                    key={song.playlist_content_id}
                    title={song.title}
                    artist={song.artist}
                    duration={song.length}
                  />
                ))}
              </tbody>
            </table>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </>
    );
}

export default Playlists;