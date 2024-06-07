import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import './components/text_form.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>


      <Router>
        <Navbar title={"TextUtils2"} homeText="Home" />

        <Routes>
          <Route exact path="/about" element={<About />}>

          </Route>
          <Route exact path="/" element={<TextForm heading={"Write text for analysis here"} />}></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
