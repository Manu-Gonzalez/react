import Header from "./components/Header";
import Menu from "./components/Menu";
import Tabs from "./components/Tabs";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Tabs />
    </div>
  );
}
