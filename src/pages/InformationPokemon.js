import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const InformationPokemon = () => {
  const { id } = useParams();

  const [dataPokemon, setDataPokemon] = useState({});

  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDataPokemon(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1 className="text-center">
        <b>{id} Pokemon Data</b>
      </h1>
      <hr />
      <div className="contenedor">
        <img
          src={dataPokemon.sprites && dataPokemon.sprites.front_shiny}
          className="img-thumbnail"
        />
        <img
          src={dataPokemon.sprites && dataPokemon.sprites.back_default}
          className="img-thumbnail"
        />
      </div>
      <hr />

      <table className="table table-bordered table-hover table-sm text-center">
        <thead>
          <tr>
            <th>- Abilities</th>
          </tr>
        </thead>
        <tbody>
          {dataPokemon.abilities &&
            dataPokemon.abilities.map((item, index) => (
              <tr key={index}>
                <td>{`${index + 1}. ${item.ability.name}`}</td>
              </tr>
            ))}
        </tbody>
        <thead>
          <tr>
            <th>- Moves</th>
          </tr>
        </thead>
        <tbody>
          {dataPokemon.moves &&
            dataPokemon.moves.map((move, index) => (
              <tr key={index}>
                <td>{`${index + 1}. ${move.move.name}`}</td>
              </tr>
            ))}
        </tbody>
        <thead>
          <tr>
            <th>- stats</th>
          </tr>
        </thead>
        <tbody>
          {dataPokemon.stats &&
            dataPokemon.stats.map((stat, index) => (
              <tr key={index}>
                <td>{`${index + 1}. ${stat.stat.name} - ${stat.base_stat}`}</td>
              </tr>
            ))}
        </tbody>
        <thead>
          <tr>
            <th>- Types</th>
          </tr>
        </thead>
        <tbody>
          {dataPokemon.types &&
            dataPokemon.types.map((type, index) => (
              <tr key={index}>
                <td>{`${index + 1}. ${type.type.name}`}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
