import React, { useState, memo } from "react";
import "./Search.css";

function MealSearch(props) {
  const [searchItem, setSearchItem] = useState("");
  if (!searchItem) props.onSearch(props.data);

  const handleSearchChange = (event) => {
    setSearchItem(event.target.value);
    let updatedMeals = props.data.filter((meal) =>
      meal.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    if (event.target.value === "") updatedMeals = props.data;
    props.onSearch(updatedMeals);
  };

  return (
    <div>
      <input
        className="search"
        type="text"
        placeholder="Search by meal name"
        // value={searchItem}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default memo(MealSearch);
