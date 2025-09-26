import type { StudySession } from "../types/study";

interface StudyCardProps {
  study: StudySession;
}

export function StudyCard({ study }: StudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md mx-auto border border-gray-300 hover:shadow-lg transition-shadow duration-200">
      <div className="mb-3 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-green-700">
          {study.subject}
        </h2>
        <p className="text-gray-500 text-sm">Data: {study.date}</p>
      </div>

      <div className="text-gray-600">
        <p className="mb-2">
          <strong>Duração:</strong> {study.minutes} minutos
        </p>
        <p>
          <strong>Dificuldade:</strong> {study.Dificuldade}
        </p>
      </div>
    </div>
  );
}