import React from "react";
import { RouteComponentProps } from "react-router";
import { DataArray } from "./Home";
type Props = {
  //   pokemon: DataArray;
  match: string;
};

const Pokemon = ({ match }: RouteComponentProps<Props>) => {
  console.log(match);
  return (
    <div>
      {/* <p>{pokemon.name}</p> */}
      {/* <Pokemon url={pokemon.url} /> */}
    </div>
  );
};

export default Pokemon;
