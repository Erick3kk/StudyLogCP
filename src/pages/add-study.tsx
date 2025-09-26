
import { useMemo } from "react";
import { StudyForm } from "../components/study-form";
import type { StudySession } from "../types/study";

interface AddStudyProps {
  studies: StudySession[];
  onAdd: (study: StudySession) => void;
}

export function AddStudy({ onAdd, studies }: AddStudyProps) {
  const studyTotal = useMemo(() => {
    return studies.length;
  }, [studies]);

  const studyMinutes = useMemo(() => {
    let studyMinutes: number = 0;

    studies.forEach((study) => {
      studyMinutes += study.minutes;
    });

    const hours = Math.floor(studyMinutes / 60);
    const minutes = studyMinutes % 60;

    return `${hours}:${minutes}`;
  }, [studies]);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-green-700 mb-4">
        Adicionar novo estudo
      </h2>

      <p className="text-md font-medium text-gray-500 mb-2">
        Total de estudos: {studyTotal}
      </p>

      <p className="text-md text-gray-500 mb-6">
        Tempo de estudo: {studyMinutes} horas
      </p>

      <StudyForm onAdd={onAdd} />
    </div>
  );
}