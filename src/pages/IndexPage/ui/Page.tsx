const IndexPage = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-64 text-3xl">
        <div>Welcome to Yumetune</div>
        <br />
        <div>Consider installing our non-existent mobile app</div>
      </div>

      <div className="dropdown">
  <button className="btn btn-primary dropdown-toggle">Primary Dropdown</button>
  <ul className="shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a>Dropdown Item 1</a>
    </li>
    <li>
      <a>Dropdown Item 2</a>
    </li>
  </ul>
</div>



    </>
  );
};

export default IndexPage;
