import Container from "../components/Container";
import BurgerList from "../tailwindHamburger/BurgerList";
import { useEffect, useState } from "react";
import { API, URI } from "../modules/instance";
const TailwindHamburgerPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getBurgers = async () => {
      const res = await API.get(URI);
      setData(res.data);
    };
    getBurgers();
    console.log(data);
  }, []);

  return (
    <div className="bg-orange-600 h-screen w-screen py-10">
      <h1 className="text3xl text-white font-extrabold py-10">Burger APP</h1>
      <Container>
        <BurgerList data={data} />
      </Container>
    </div>
  );
};
export default TailwindHamburgerPage;
