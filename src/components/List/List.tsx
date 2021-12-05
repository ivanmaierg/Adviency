import React from "react";
import ListItem from "../ListItem/ListItem";
import './List.css';
import {Gift} from '../../utils/types';
interface Props {
  children:React.ReactNode;
}

export default function List({ children }: Props): JSX.Element {
  return <div className="List__container"><ul className="List">{children}</ul></div>
}
