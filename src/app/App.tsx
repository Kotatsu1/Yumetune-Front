import { Route, Routes } from "react-router-dom";
import { Layout } from "../widgets/Layout";
import { Home, NoMatch } from "../pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="/browse" element={<Browse />} />
          <Route path="/songs" element={<Songs />} /> */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
