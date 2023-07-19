import { FC, SetStateAction, useState } from "react";
import useAxios from "@/interceptors";
import { Songs } from "@/pages";


const Search: FC = () => {
    const [searchData, setSearchData] = useState<any>([]);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [sourceData, setSourceData] = useState('');
    const [artistInputValue, setArtistInputValue] = useState('');
    const [titleInputValue, setTitleInputValue] = useState('');

    const axiosRequest = useAxios();

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
            const response = await axiosRequest.get(`/yt_search/search?request=${searchInputValue}`);
            setSearchData(response.data);
          } catch (error) {

          } finally {
            setLoading(false);
          }

      };

    const serverSongUpload = async () => {
        setUploading(true);
        try {
            const response = await axiosRequest.post(`/yt_search/create_hls`, {
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
        <div className="w-full h-100vh flex justify-between h-screen">
          <Songs />
          <div>
            <div className="flex">
            <input
              type="text"
              value={searchInputValue}
              onChange={handleInputChange}
              placeholder="Search youtube"
              className="input input-bordered input-primary w-full max-w-xs "
            />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            onClick={fetchSearchData}
            className="m-2 cursor-pointer"
            width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#ff7ac6" stroke="none">
              <path d="M1940 5109 c-357 -37 -713 -177 -1020 -403 -114 -83 -323 -290 -407
              -402 -264 -349 -405 -745 -420 -1179 -9 -259 23 -481 103 -723 100 -301 272
              -578 500 -806 334 -334 756 -539 1227 -597 127 -15 451 -7 572 15 281 51 531
              147 758 289 l87 56 614 -638 c337 -350 627 -649 644 -663 108 -90 294 -65 376
              50 42 58 54 96 55 164 2 108 -5 117 -654 790 -324 336 -600 624 -612 639 l-23
              27 54 68 c362 465 503 1076 385 1674 -59 299 -214 627 -412 873 -442 550
              -1129 837 -1827 766z m410 -543 c649 -87 1163 -562 1300 -1202 28 -127 38
              -382 20 -503 -49 -348 -196 -645 -436 -885 -231 -232 -518 -378 -844 -432
              -109 -18 -349 -18 -466 0 -422 64 -804 309 -1039 666 -84 127 -129 220 -175
              359 -51 151 -71 264 -77 434 -33 853 655 1569 1512 1576 55 0 147 -6 205 -13z"/>
              </g>
            </svg>
            </div>


            {loading ? (
              <div className="loading loading-spinner text-secondary loading-lg absolute mt-10" />
            ) : null}
            <div>
              {searchData.map((item: any) => (
                <div
                  onClick={() => openUploadModal(item.source)}
                  className="cursor-pointer hover:text-primary"
                >
                  {item.title}
                </div>
              ))}
            </div>
            <dialog id="upload_modal" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">
                  Here you can upload the song to the server
                </h3>
                <input
                  type="text"
                  className="input input-sm  input-bordered input-primary w-full max-w-xs block mb-5 mt-5"
                  placeholder="artist"
                  value={artistInputValue}
                  onChange={handleArtistInputChange}
                />
                <input
                  type="text"
                  className="input input-sm  input-bordered input-primary w-full max-w-xs block"
                  placeholder="title"
                  value={titleInputValue}
                  onChange={handleTitleInputChange}
                />
                <p
                  className="py-4 cursor-pointer hover:text-primary btn mt-10 btn-primary"
                  onClick={serverSongUpload}
                >
                  UPLOAD
                </p>
                {uploading ? (
                  <div className="loading loading-spinner text-secondary loading-lg absolute mt-10" />
                ) : null}
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>



{/* 
          <div>
          <div>IN DEVELOPMENT</div>
          <div className="flex">

            
            <input
              type="text"
              value={searchInputValue}
              onChange={handleInputChange}
              placeholder="Search vk"
              className="input input-bordered input-primary w-full max-w-xs"
            />
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            onClick={fetchSearchData}
            className="m-2 cursor-pointer"
            width="20.000000pt" height="20.000000pt" viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="#ff7ac6" stroke="none">
              <path d="M1940 5109 c-357 -37 -713 -177 -1020 -403 -114 -83 -323 -290 -407
              -402 -264 -349 -405 -745 -420 -1179 -9 -259 23 -481 103 -723 100 -301 272
              -578 500 -806 334 -334 756 -539 1227 -597 127 -15 451 -7 572 15 281 51 531
              147 758 289 l87 56 614 -638 c337 -350 627 -649 644 -663 108 -90 294 -65 376
              50 42 58 54 96 55 164 2 108 -5 117 -654 790 -324 336 -600 624 -612 639 l-23
              27 54 68 c362 465 503 1076 385 1674 -59 299 -214 627 -412 873 -442 550
              -1129 837 -1827 766z m410 -543 c649 -87 1163 -562 1300 -1202 28 -127 38
              -382 20 -503 -49 -348 -196 -645 -436 -885 -231 -232 -518 -378 -844 -432
              -109 -18 -349 -18 -466 0 -422 64 -804 309 -1039 666 -84 127 -129 220 -175
              359 -51 151 -71 264 -77 434 -33 853 655 1569 1512 1576 55 0 147 -6 205 -13z"/>
              </g>
            </svg>
            </div>
            {loading ? (
              <div className="loading loading-spinner text-secondary loading-lg absolute mt-10" />
            ) : null}
            <div>
              {searchData.map((item: any) => (
                <div
                  onClick={() => openUploadModal(item.source)}
                  className="cursor-pointer hover:text-primary"
                >
                  {item.title}
                </div>
              ))}
            </div>
            <dialog id="upload_modal" className="modal">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">
                  Here you can upload the song to the server
                </h3>
                <input
                  type="text"
                  className="input input-sm  input-bordered input-primary w-full max-w-xs block mb-5 mt-5"
                  placeholder="artist"
                  value={artistInputValue}
                  onChange={handleArtistInputChange}
                />
                <input
                  type="text"
                  className="input input-sm  input-bordered input-primary w-full max-w-xs block"
                  placeholder="title"
                  value={titleInputValue}
                  onChange={handleTitleInputChange}
                />
                <p
                  className="py-4 cursor-pointer hover:text-primary btn mt-10 btn-primary"
                  onClick={serverSongUpload}
                >
                  UPLOAD
                </p>
                {uploading ? (
                  <div className="loading loading-spinner text-secondary loading-lg absolute mt-10" />
                ) : null}
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div> */}




        </div>
      </>
    );
}

export default Search;
