import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>But not sorry, page can't be found you dingus</p>
      <Link to="/"> Let's take a trip back home...</Link>
    </div>
  );
};

export default NotFound;
