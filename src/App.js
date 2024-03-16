import NavBar from "./components/NavBar"
import "./App.css"
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
    <NavBar />
	<div className="container mt-5">
		<TextArea/>
	</div>
    </>
  );
}

export default App;
