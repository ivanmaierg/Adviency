import React from "react";

interface Props {
  gifts: string[];
}

export default function List({ gifts }: Props): JSX.Element {
  return <ul>{gifts && gifts.map((gift) => <li>gift</li>)}</ul>;
}
