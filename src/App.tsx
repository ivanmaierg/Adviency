import Header from "./components/Header/Header";
import List from "./components/List/List";
import Snowfall from 'react-snowfall';
import "./styles.css";
import React, { useState } from "react";
import { AddGifts } from "./components/AddGifts/AddGifts";

export default function App() {
  const [gifts,setGifts] = useState([]);

  return (
    <main className="App">
      <Header />
      <List gifts={gifts} />
      <AddGifts setGifts={setGifts}/>
      <Snowfall  snowflakeCount={50}/>
   </main>
  );
}
