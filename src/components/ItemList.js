import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="py-4 px-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="flex justify-between">
            <div className="w-9/12 flex flex-col py-2">
              <span className="font-bold">{item?.card?.info?.name}</span>
              <span className="font-bold">
                ₹ {item?.card?.info?.price / 100}
              </span>
              <span>{item?.card?.info?.ratings.aggregatedRating.rating}</span>
              <span className="text-xs">{item?.card?.info?.description}</span>
            </div>
            <div className="w-3/12 ">
              <img
                className="rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
              />
              <button className="px-6 py-1 relative bottom-4 left-10  rounded-md bg-white border text-green-600">
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
