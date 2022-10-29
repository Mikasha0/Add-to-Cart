import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Store/store';
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
      <Provider store={store}>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
          </Routes>
      </Provider>
      </Router>
    </div>
  );
}

export default App;
