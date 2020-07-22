import React from "react";

const SearchParams = () => {
  const location = "Seattle Wa";

  return (
    <div className="search-params">
      <form>
        <label htmlFor="Location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
