import { MENU_API } from "../utils/constants";
import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
    // setResInfo(json?.data?.cards[2]?.card?.card?.info);
  };

  return resInfo;
};

export default useRestaurantMenu;
