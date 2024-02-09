"use client";

import { useState } from "react";
import Styles from "./Search.module.css";
export default function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const [searchValuee, setSearchValuee] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    console.log(searchValue, searchValuee);
    // Open the search results in a new tab
    window.open(`/search?q=${searchValue} ${searchValuee}`);
  }

  return (
    // try to make multiple <input> for multiple text input
    <div>
      <form className={Styles.form}>
        <input
          className={Styles.input}
          type="text"
          placeholder="Comment Puis-Je Vous Aider ?"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <input
          className={Styles.input}
          type="text"
          placeholder="Comment Puis-Je Vous Aider ?"
          value={searchValuee}
          onChange={(e) => setSearchValuee(e.target.value)}
        />
        <button className={Styles.button} type="submit" onClick={handleSearch}>
          Help !
        </button>
      </form>
    </div>
  );
}
