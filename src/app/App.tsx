import { Route, Routes } from "react-router-dom";
import { Songs, Hello, NoMatch, Search, Library, Browse } from "../pages";
import { Preloader } from "@/features/preloader/ui/Preloader";
import  { IndexPage } from "../pages";

const App = () => {
  return (
    <>
      <Preloader />
      <Routes>
        <Route path="/" element={<Hello />}>
          <Route index element={<IndexPage />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
