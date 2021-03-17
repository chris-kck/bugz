const Search = () => (
  <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Where would you like to go</span>
        </label>
        <br/>
        <input
            type="text"
            id="header-search"
            placeholder="Location"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);
export default Search;