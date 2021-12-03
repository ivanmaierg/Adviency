import React from "react";
import ListItem from "../ListItem/ListItem";
import './List.css';
interface Props {
  gifts: string[];
}

export default function List({ gifts }: Props): JSX.Element {
  return <ul className="List">{gifts && gifts.map((gift) => <ListItem title={gift}/>)}</ul>;
}
