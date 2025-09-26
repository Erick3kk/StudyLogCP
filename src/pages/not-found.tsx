import { Link } from "react-router-dom";
import NotFoundImage from "../assets/img/404-error.png";

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-center py-20 px-4">
      <h1 className="text-5xl font-extrabold text-red-600 drop-shadow-lg">
        Página não encontrada
      </h1>

      <img
        className="w-2/5 max-w-md rounded-xl shadow-lg"
        src={NotFoundImage}
        alt="erro 404 - página não encontrada"
      />

      <p className="text-gray-500 text-lg">
        Parece que este caminho não existe ou foi movido.
      </p>

      <Link
        className="bg-red-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-red-700 hover:scale-105 transition-transform duration-200"
        to="/"
      >
        Ir para a página inicial
      </Link>
    </div>
  );
}
