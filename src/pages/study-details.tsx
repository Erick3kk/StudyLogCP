import { useLocation, useParams } from "react-router-dom";
import { StudyCard } from "../components/study-card";

export function StudyDetails() {
  const { id } = useParams();
  const { state } = useLocation();

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold text-green-700 mb-4">
        Detalhes do estudo - ID {id}
      </h2>

      {state?.study ? (
        <StudyCard study={state.study} />
      ) : (
        <p className="text-sm text-red-500 mb-4">Nenhum dado de estudo encontrado.</p>
      )}
    </div>
  );
}