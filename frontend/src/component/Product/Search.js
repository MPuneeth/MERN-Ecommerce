import React, { useState, Fragment } from "react";
import "./Search.css";
import MetaData from "../layout/MetaData";
import { useNavigate } from "react-router-dom";

const Search = () => {

    const navigate=useNavigate();
    const [keyword, setKeyword] = useState("");
    const searchSubmitHandler = (e) => {
        //e.preventDefault is to prevent the form from reloading when it is submitted
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/products/${keyword}`);
        } else {
            navigate("/products");
        }
      };

  return (
    <Fragment>
    <MetaData title="Search A Product -- ECOMMERCE" />
    <form className="searchBox" onSubmit={searchSubmitHandler}>
      <input
        type="text"
        placeholder="Search a Product ..."
        onChange={(e) => setKeyword(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  </Fragment>
);
}

export default Search