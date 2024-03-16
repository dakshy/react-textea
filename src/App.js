import NavBar from "./components/NavBar"
import "./App.css"
import TextArea from "./components/TextArea";
import Footer from "./components/Footer";
import {
    Route,
    Routes,
    BrowserRouter as Router
} from "react-router-dom";
import NotFound from "./components/ErrorPages";

function App() {
  return (
    <Router>
        <NavBar />

        <Routes>
            <Route exact path="/" element={<TextArea/>} />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
