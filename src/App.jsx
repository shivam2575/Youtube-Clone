import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Navbar />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
