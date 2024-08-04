import HomePage from "./pages/HomePage";
import "./App.css";
import TodoPage from "./pages/TodoPage";
import AxiosPage from "./pages/AxiosPage";
import ReduxCounterPage from "./pages/ReduxCounterPage";

function App() {
  return (
    <div className="app">
      <AxiosPage />
      {/* <ReduxCounterPage/> */}
    </div>
  );
}

export default App;
