import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import './components/text_form.css';

function App() {
  return (
    <>
      <Navbar title={"TextUtils2"} homeText="Home" />
      {/* <Navbar /> */}
      <div className="container">
        <TextForm heading={"Write text for analysis here"} />
      </div>
    </>
  );
}

export default App;
