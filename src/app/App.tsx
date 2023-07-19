import { Route, Routes } from "react-router-dom";
import { Hello, NoMatch, Search, Library, Playlists } from "../pages";
import { Preloader } from "@/features/preloader/ui/Preloader";
import  { IndexPage } from "../pages";

const App = () => {
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Hello />}>
          <Route index element={<IndexPage />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
