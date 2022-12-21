export const SearchPokemon = ({ searchTerm, search }) => {
  return (
    <div>
      <input
        value={search}
        onChange={searchTerm}
        type="text"
        placeholder="Search Pokemon"
        className="form-control"
      />
    </div>
  );
};
