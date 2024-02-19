import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
export default function Search({
  show,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    "All",
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const [placeholder, setPlaceholder] = useState("Choose Category")
  const handleCategoryChange = (event) => {
    
    setSelectedCategory(event.target.value==="All"?"":`/category/${event.target.value}`);
    setPlaceholder(event.target.value === "" ? "Choose Category" : event.target.value);
  };
  const search = useRef();
  const navigate = useNavigate();
  function handleSearch(event) {
    event.preventDefault();
    if (search.current.value === "") {
      // setUrl(`?limit=0`)
      return;
    }
    navigate(`/search/${search.current.value}`);
    // setUrl(`/search?q=${search.current.value}&limit=0`)
  }
  return (
    <div className="w-full flex gap-x-1 gap-y-2 md:flex-row flex-col items-center md:justify-center">
      <form
        onSubmit={(e) => handleSearch(e)}
        className="w-full bg-white text-black rounded-full md:w-1/2 flex justify-center max-w-[1080px] px-2"
      >
        <input
          placeholder="Search item"
          className="w-full outline-none bg-transparent px-2 py-2 rounded-full"
          ref={search}
          type="text"
        />
        <button className="text-3xl right font-bold">
          <CiSearch />
        </button>
      </form>
      {/* categories */}
      {show && (
         <div className="flex  items-center">
         <select
           id="category"
           value={selectedCategory}
           onChange={handleCategoryChange}
           className="rounded-full cursor-pointer py-2 px-4 border border-gray-300 shadow-sm focus:outline-none focus:border-blue-400"
         >
           <option className="cursor-pointer" value="">{placeholder}</option>
           {categories.map((category, index) => (
             <option className="cursor-pointer" key={index} value={category}>
               {category}
             </option>
           ))}
         </select>
       </div>
      )}
    </div>
  );
}
