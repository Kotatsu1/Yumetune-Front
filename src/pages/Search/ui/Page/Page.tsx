import { FC, SetStateAction, useState } from "react";
import axios from "axios";


const Search: FC = () => {
    const apiUrl = import.meta.env.VITE_APP_API;
    const [searchData, setSearchData] = useState<any>([]);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [sourceData, setSourceData] = useState('');
    const [artistInputValue, setArtistInputValue] = useState('');
    const [titleInputValue, setTitleInputValue] = useState('');

    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setSearchInputValue(event.target.value);
      };

    const handleArtistInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setArtistInputValue(event.target.value);
    }

    const handleTitleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setTitleInputValue(event.target.value);
    }
    

    const fetchSearchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${apiUrl}/yt_search/search?request=${searchInputValue}`);
            setSearchData(response.data);
          } catch (error) {

          } finally {
            setLoading(false);
          }

      };

    const serverSongUpload = async () => {
        setUploading(true);
        try {
            const response = await axios.post(`${apiUrl}/yt_search/create_hls`, {
                source: sourceData,
                artist: artistInputValue,
                title: titleInputValue,
            });

            if (response.status === 200) {
                alert('success')
            }
          } catch (error) {
          } finally {
            setUploading(false);
          }
    }

    interface CustomWindow extends Window {
        upload_modal: {
          showModal: () => void;
        };
      }

    const openUploadModal = (source: string) => {
        (window as unknown as CustomWindow).upload_modal.showModal();
        setSourceData(source);
    }


    return (
        <>
      <div className="p-4">
        <h1 className="text-4xl text-white font-bold">Search</h1>
      </div>
        <div className="ml-40 mt-20">
            <input type="text" 
                value={searchInputValue} 
                onChange={handleInputChange} 
                placeholder="Search yt" 
                className="input input-bordered input-primary w-full max-w-xs" 
            />

            <button className="m-10 btn btn-primary" onClick={fetchSearchData}>search</button>
            {loading ? <div className="loading loading-spinner text-secondary loading-lg absolute mt-10" /> : null}
            <div>{searchData.map((item: any) => 
                <div 
                    onClick={() => openUploadModal(item.source)} 
                    className="cursor-pointer hover:text-primary">{item.title}
                </div>)}
            </div>
            <dialog id="upload_modal" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Here you can upload the song to the server</h3>
                <input type="text" 
                    className="input input-sm  input-bordered input-primary w-full max-w-xs block mb-5 mt-5"
                    placeholder="artist"
                    value={artistInputValue}
                    onChange={handleArtistInputChange}
                />
                <input type="text" 
                    className="input input-sm  input-bordered input-primary w-full max-w-xs block"
                    placeholder="title"
                    value={titleInputValue}
                    onChange={handleTitleInputChange}
                />
                <p className="py-4 cursor-pointer hover:text-primary btn mt-10 btn-primary" onClick={serverSongUpload}>UPLOAD</p>
                {uploading ? <div className="loading loading-spinner text-secondary loading-lg absolute mt-10" /> : null}
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </div>

        
        </>
    );
}

export default Search;
