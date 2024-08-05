import HomePage from "./pages/HomePage";
import "./App.css";
import TodoPage from "./pages/TodoPage";
import TailwindHamburgerPage from "./pages/TailwindHamburgerPage";
import AxiosPage from "./pages/AxiosPage";
import ReduxCounterPage from "./pages/ReduxCounterPage";

function App() {
  return (
    <div className="text-center text-pretty">
      <TailwindHamburgerPage />
      {/* <ReduxCounterPage/> 
       <AxiosPage /> */}
    </div>
  );
}

export default App;
