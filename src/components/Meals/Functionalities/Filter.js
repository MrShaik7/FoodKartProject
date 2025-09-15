import React, { memo } from "react";
import "./Filter.css";

function Filter(props) {
  const FilterChangeHandler = (event) => {
    let val = event.target.value;
    let updatedMeals = props.data.filter((meal) => meal.category === val);
    if (val === "All") {
      updatedMeals = props.data;
    }
    props.onFilter(updatedMeals);
  };
  // console.log(filteredData, "filter");

  return (
    <>
      <div>
        <label className="div">Filter By Category</label>
        <select className="fil" onChange={FilterChangeHandler}>
          <option value="Select">Select</option>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
        </select>
      </div>
    </>
  );
}

export default memo(Filter);
