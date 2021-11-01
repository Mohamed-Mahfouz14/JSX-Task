import "./App.css";
import punisherPoster from "./imageInSrc.jpg";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="container">
      <div>
        <img src="/imageInPublic.jpg" alt="Punisher logo" />
      </div>
      <div>
        <h1 style={{ align: "middle" }}>The Punisher - series</h1>
      </div>
      <div>
        <img src={punisherPoster} alt="Punisher poster"></img>
      </div>
      <ReactPlayer url="https://www.youtube.com/watch?v=jrLhP5sK2wI&ab_channel=Netflix" />
    </div>
  );
}

export default App;
