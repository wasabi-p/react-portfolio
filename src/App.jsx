import "./App.css";
import Banner from "./components/Banner";
import Main from "./components/Main";
import "./fonts/KH-Dot-Kodenmachou-12-Ki.ttf";
import "./fonts/KH-Dot-Kodenmachou-16.ttf";
import "./fonts/KH-Dot-Akihabara-16.ttf";
import useFontLoader from "./hooks/useFontLoader";

function App() {
  
  const fontsLoaded = useFontLoader();

  if (!fontsLoaded) {
    return <div className="loading">Loading fonts...</div>;
  }

  return (
    <div className="App">
      <Banner />
      <Main />
    </div>
  );
}

export default App;
