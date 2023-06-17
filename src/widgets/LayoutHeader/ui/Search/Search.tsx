const Search = () => {
  return (
    <>
      <div className="join">
        <div>
          <div>
            <input
              className="input-bordered input join-item"
              placeholder="Search..."
            />
          </div>
        </div>
        <select className="select-bordered select join-item">
          <option value={"value"} disabled selected>
            Category
          </option>
          <option value={"Sci-fi"}>Sci-fi</option>
          <option value={"Drama"}>Drama</option>
          <option value={"Action"}>Action</option>
        </select>
        <div className="indicator">
          <button className="join-item btn">Search</button>
        </div>
      </div>
    </>
  );
};

export default Search;
