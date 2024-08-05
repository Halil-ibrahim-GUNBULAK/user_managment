import React from "react";
const BurgerCard = ({ item }) => {
  return (
    <div className="bg-white gap-7 mt-5 px-1 py-4 rounded-xl shadow-xl hover:scale-110 transition-all ease-in duration-150 text-center min-w-40">
      <h2>{item.name}</h2>
      <div className="grid grid-cols-2 max-h-40 max-w-40">
        <img
          className="bg-orange-300 p-3 rounded-xl"
          src={require(item.images[0])}
          alt="new"
        />
        <img
          className="bg-orange-300 p-3 rounded-xl"
          src={require(item.images[1])}
        />
      </div>
      <h5 className="whitespace-nowrap">{item.desc}</h5>
    </div>
  );
};
export default BurgerCard;
