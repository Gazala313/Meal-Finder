import React, { useEffect, useState } from "react";
import Image from "./Image";

function From() {
  const applicationId = "4774f375";
  const apiKey = "25bca7af93ea45bc23449906e1739123";
  const [value, setValue] = useState("");
  const [results, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  function fet(e) {
    e.preventDefault();
    if (!value) return;
    async function fetchData() {
      const resp = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
      );
      const data = await resp.json();
      const requiredData = data.meals;
      setResult(requiredData);
    }
    fetchData();
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="Search Your Recipes..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <ion-icon name="search" id="search-btn1">
          <button onClick={fet}>Search</button>
        </ion-icon>
      </form>

      <div className="search-result">
        {results &&
          results.map((ele, index) => <Image key={index} ele={ele} />)}
      </div>
    </>
  );
}
export default From;
