import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //   const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // if (showItems) {
    //   setShowItems(false);
    // } else {
    //   setShowItems(true);
    // }
    setShowIndex();
  };
  return (
    <div>
      {/***Accordion Header */}

      <div className="bg-gray-50 w-6/12 mx-auto my-4 p-4 shadow-lg">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span className="font-bold text-2xl">⌄</span>
        </div>
        <div>{showItems && <ItemList items={data?.itemCards} />}</div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
