import React, { useState } from "react";
import "./SearchBox.css";

function SearchBox() {
  const [searchLine, setSearchLineChangeHandler] = useState("");

  const onChange = (e) => {
    setSearchLineChangeHandler(e.target.value);
  };

  const searchBoxSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-box">
      <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
        <label className="search-box__form-label">
          Искать фильм по названию:
          <input
            value={searchLine}
            type="text"
            className="search-box__form-input"
            placeholder="Например, Shawshank Redemption"
            onChange={onChange}
          />
        </label>
        <button
          type="submit"
          className="search-box__form-submit"
          disabled={!searchLine}
        >
          Искать
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
