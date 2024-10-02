import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resData;

  return (
    <div className="bg-gray-200 w-52 p-2 m-2 rounded-lg">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="mt-2 mb-2 font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default RestaurantCard;

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-500 px-2 py-1 m-2 text-white rounded-lg">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
