import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App relative">
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  );
}
