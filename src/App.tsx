import Header from "./components/Header/Header";
import List from "./components/List/List";
import Snowfall from 'react-snowfall';
import "./styles.css";
import React, { useState } from "react";
import { AddGifts } from "./components/AddGifts/AddGifts";
import { Gift } from "./utils/types";
import ListItem from "./components/ListItem/ListItem";

export default function App() {
  const [gifts,setGifts] = useState<Gift[]>([]);
  const handleDeleteItem = (id:number | string) => {
    setGifts(gifts.filter((gift) => {
        return gift.id !== id;
    }));
  }


  return (
    <main className="App">
      <Header />
      <List>
        {gifts.map((gift) => <ListItem key={gift.id} handleDeleteItem={handleDeleteItem} gift={gift}/>)}
      </List>
      <AddGifts setGifts={setGifts}/>
      <Snowfall  snowflakeCount={50}/>
   </main>
  );
}
