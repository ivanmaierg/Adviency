import Header from "./components/Header/Header";
import List from "./components/List/List";
import Snowfall from 'react-snowfall';
import "./styles.css";

export default function App() {
  return (
    <main className="App">
      <Header />
      <List gifts={["MacBook","La factura de edelap","termo"]} />
      <Snowfall  snowflakeCount={50}/>
   </main>
  );
}
