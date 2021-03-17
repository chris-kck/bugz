import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import TimeDisplay from "./time_display";

const LocationTime = () => {
  const { id, city } = useParams();
  const { data: time, isPending, error } = useFetch(
    `http://worldtimeapi.org/api/${id}/${city}`
  );
  return (
    <div>
      {isPending && (
        <h3>
          Fetching time for <strong>{city}</strong>
        </h3>
      )}
      {!isPending && <TimeDisplay datetime={time} />}
    </div>
  );
};

export default LocationTime;
