import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokemon from "./Pokemon";
import { Link } from "react-router-dom";

export type DataArray = {
  name: string;
  url: string;
};

function Home() {
  const [dataList, setDataList] = useState<DataArray[]>([]);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
      .then((res) => setDataList(res.data.results))
      .catch((err) => console.log(err));
  }, [dataList.length]);
  console.log(dataList);
  return (
    <div className="home">
      <h1>Poke API</h1>
      {dataList.map((data, index) => (
        <Link
          to={{
            pathname: `/pokemon/${index + 1}`,
            params: {
              pokemon: data,
            },
          }}
        >
          <p>{data.name}</p>
          {/* <Pokemon pokemon={data} /> */}
        </Link>
      ))}
    </div>
  );
}

export default Home;
