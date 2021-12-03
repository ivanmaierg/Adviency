import React from "react";

interface Props {
  gifts: string[];
}

export default function List({ gifts }: Props): JSX.Element {
  return (
    <ul className="List">
      {gifts && gifts.map((gift) => <li className="List__item">gift</li>)}
    </ul>
  );
}
