import BurgerCard from "./BurgerCard";

const BurgerList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-10">
      {data.map((item) => {
        return <BurgerCard item={item} />;
      })}
    </div>
  );
};
export default BurgerList;
