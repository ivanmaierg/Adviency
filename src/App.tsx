import Header from "./components/Header/Header";
import List from "./components/List/List";
import Snowfall from 'react-snowfall';
import "./styles.css";

export default function App() {
  return (
    <main className="App">
      <Header />
      <List gifts={["2kg de yerba playadito","La factura de Edelap","Un termo xq se me pinchó"]} />
      <section><Snowfall  snowflakeCount={50}/></section>
   </main>
  );
}
