import React, { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, Wa");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="Location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
        <h1>{location}</h1>
      </form>
    </div>
  );
};

export default SearchParams;
