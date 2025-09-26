import { Link } from "react-router-dom";
import type { StudySession } from "../types/study";

interface StudyResumeProps {
  study: StudySession;
  removeStudy: (id: string) => void;
}

export function StudyResume({ study, removeStudy }: StudyResumeProps) {
  return (
    <div className="max-w-xl w-full bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-4 transition hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{study.subject}</h2>
          <p className="text-sm text-gray-500">
            Data: <span className="font-medium text-gray-600">{study.date}</span>s
          </p>
          <p className="text-sm text-gray-500">
            Duração: <span className="font-medium text-gray-600">{study.minutes} minutos</span>
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <Link
            to={`/study/${study.id}`}
            state={{ study }}
            className="text-sm text-gray-700 hover:text-gray-900 border border-gray-400 hover:border-gray-600 px-4 py-1.5 rounded transition"
          >
            Detalhes
          </Link>

          <button
            onClick={() => removeStudy(study.id)}
            className="text-sm text-gray-700 bg-gray-200 hover:bg-gray-300 border border-gray-400 px-4 py-1.5 rounded transition"
          >
            Remover estudo
          </button>
        </div>
      </div>
    </div>
  );
}
