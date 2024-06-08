import "./App.css";
import CackContainer from "./Componant/CackContainer";
import { Provider } from "react-redux";
import  Store from "./Redux/Store";

function App() {
  return (
    <>
      <Provider store = {Store}>
        <CackContainer/>
      </Provider>
    </>
  );
}

export default App;
