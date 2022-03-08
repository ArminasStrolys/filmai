import React from "react";

const Searchbox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        type="text"
        placeholder="Search for movie"
      />
    </div>
  );
};

export default Searchbox;
