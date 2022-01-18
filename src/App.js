import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Service from "./Components/Service/Service";
import Healthcare from "./Components/Healthcare/Healthcare";
import Mobileapp from "./Components/Mobileapp/Mobileapp";
import Review from "./Components/Review/Review";
import Article from "./Components/Article/Article";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div class="App">
      <Navbar />
      <Header />
      <Service />
      <Healthcare />
      <Mobileapp />
      <Review />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
