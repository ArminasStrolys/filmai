import React, { useState, useEffect } from 'react';
import "./search.css";

export default function Search() {
  const [val, setVal] = useState('')

  useEffect(() => {
    const url = "https://www.omdbapi.com/"

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.title);
        setVal(json.title)
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
}, []);

  return (
    <>
      <div>
        <h3>Search</h3>
      </div>
      <div>
        <input
          value={val}
          onInput={e => setVal(e.target.value)}
          className="form-control"
          placeholder="Search movie title"
        />
      </div>
      <div>
        <button type="button" className="btn btn-outline-secondary">
          Search
        </button>

      </div>
    </>
  );
}
