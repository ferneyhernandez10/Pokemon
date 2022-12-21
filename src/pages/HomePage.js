import { ListPokemones } from "../components/ListPokemones";

export const HomePage = () => {
  return (
    <div>
      <h1 className="text-center">Pokemon List</h1>
      <ListPokemones />
    </div>
  );
};
