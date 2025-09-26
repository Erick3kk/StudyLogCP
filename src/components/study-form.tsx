import { useState } from "react";
import type { Dificuldade } from "../types/dificuldade";
import type { StudySession } from "../types/study";

interface StudyFormProps {
  onAdd: (study: StudySession) => void;
}

export function StudyForm({ onAdd }: StudyFormProps) {
  const [subject, setSubject] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [dificuldade, setDificuldade] = useState<Dificuldade>(1); 
  const [date, setDate] = useState("");

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();

    const study: StudySession = {
      id: crypto.randomUUID(),
      subject,
      minutes,
      Dificuldade: dificuldade, 
      date,
    };

    onAdd(study);

    setSubject("");
    setMinutes(0);
    setDificuldade(1);
    setDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 flex flex-col gap-4"
    >
      <label htmlFor="study-subject" className="text-md font-medium text-gray-600">
        Assunto do estudo
      </label>
      <input
        type="text"
        id="study-subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="assunto do estudo"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="study-minutes" className="text-md font-medium text-gray-600">
        Duração (min)
      </label>
      <input
        type="number"
        id="study-minutes"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        placeholder="Duração (min)"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="study-dificuldade" className="text-md font-medium text-gray-600">
        Dificuldade
      </label>
      <input
        type="number"
        id="study-dificuldade"
        value={dificuldade}
        onChange={(e) => setDificuldade(Number(e.target.value) as Dificuldade)}
        placeholder="Dificuldade"
        min={1}
        max={3}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <label htmlFor="study-date" className="text-md font-medium text-gray-600">
        Dia de estudo
      </label>
      <input
        type="date"
        id="study-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Dia de estudo"
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
      >
        Adicionar estudo
      </button>
    </form>
  );
}