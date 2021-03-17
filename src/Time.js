import './App.css';

const Time = () => (
  <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">When would you like to go</span>
        </label>
        <br/>
        <input
            type="text"
            id="header-search"
            placeholder="Time"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);
export default Time;