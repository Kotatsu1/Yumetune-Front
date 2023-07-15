import { Route, Routes } from "react-router-dom";
import { Layout } from "../widgets/Layout";
import { Songs, Home, NoMatch, Search, Library } from "../pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
