import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, InformationPokemon } from "../pages";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="information/:id" element={<InformationPokemon />} />

        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
