import { StudyList } from "../components/study-list";
import type { StudySession } from "../types/study";

interface HomeProps {
  studies: StudySession[];
  removeStudy: (id: string) => void;
}

export function Home({ studies, removeStudy }: HomeProps) {
  return (
    <>
      <h2 className="font-semibold text-blue-700 text-2xl mb-4">
        Página Inicial - Lista de Estudos
      </h2>

      <StudyList removeStudy={removeStudy} studyList={studies} />
    </>
  );
}