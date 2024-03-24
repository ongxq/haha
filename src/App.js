import "./App.css";
import Home from "./Component/homepage";
import Dissc from "./Component/discussion";
import Post from "./Component/createPost";
import Footer from "./Component/footer";

function App() {
  return (
    <div className="App">
      <Home />

      <Dissc />
      <Post />
      <Footer />
    </div>
  );
}

export default App;
