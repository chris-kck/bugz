import useFetch from "../hooks/useFetch";

const Home = () => {
  var n = 0;
  const { data: locations, isPending, error } = useFetch(
    "http://worldtimeapi.org/api/timezone"
  );
  return (
    <div className="home">
      <h2>Homepage</h2>
      <div className="locations">
        {!isPending && (
          <select>
            {locations.map((loc) => (
              <option value={n++}>{loc}</option>
            ))}{" "}
          </select>
        )}
        {isPending && <select disabled> </select>}
      </div>
    </div>
  );
};

export default Home;
