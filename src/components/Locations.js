import { Link } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Locations = () => {
  //   const [locations, setLocations] = useState({});
  const { data: locations, isPending, error } = useFetch(
    "http://worldtimeapi.org/api/timezone"
  );

  const [searchTerm, setSearchTerm] = useState("");

  const filterResults = (e) => {
    e.preventDefault();
    locations = locations.filter((loc) => loc.includes(searchTerm));
  };

  var n = 0;
  return (
    <div className="locations">
      <form>
        <input
          type="text"
          value={searchTerm}
          placeholder="search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={filterResults}>
          Search
        </button>
      </form>

      <br />
      {locations &&
        locations.map((location) => (
          <div className="options">
            <Link key={n++} to={`/location/${location}`}>
              <div className="option-box">
                <h3>{location}</h3>
              </div>
            </Link>
          </div>
        ))}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Locations;
