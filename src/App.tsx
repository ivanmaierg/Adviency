import List from "./components/List";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Regalos:</h1>
      <List gifts={["zarasa"]} />
    </div>
  );
}
