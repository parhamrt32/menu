import "./App.css";
import React, { useState } from "react";
import items from "./data";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
console.log(allCategories);
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <div className="title">
        <h3> Our Menu </h3>
        <div className="underline"> </div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItems} />
    </main>
  );
}

export default App;
