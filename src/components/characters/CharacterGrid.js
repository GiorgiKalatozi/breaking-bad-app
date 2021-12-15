import React from "react";
import Spinner from "../UI/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = (props) => {
  return props.isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {props.items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>
      ))}
    </section>
  );
};

export default CharacterGrid;
