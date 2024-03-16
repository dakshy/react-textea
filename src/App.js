import NavBar from "./components/NavBar"
import "./App.css"
import TextArea from "./components/TextArea";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <NavBar />
    <div className="container mt-5">
      <TextArea/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
