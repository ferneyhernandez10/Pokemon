import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchPokemon } from "./SearchPokemon";

export const ListPokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPokemones(data.results);
  };

  const onSearcher = ({ target }) => {
    setSearch(target.value);
  };

  let pokemonResult = [];
  if (!search) {
    pokemonResult = pokemones;
  } else {
    pokemonResult = pokemones.filter((element) =>
      element.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <SearchPokemon searchTerm={onSearcher} search={search} />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr>
            <th>N°</th>
            <th>POKEMONnnnnnnnn</th>
          </tr>
        </thead>
        <tbody>
          {pokemonResult.map((pokemon, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link to={`/information/${pokemon.name}`}>{pokemon.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
