import type { StudySession } from "../types/study";  
import { StudyResume } from "./study-resume";  

interface StudyListProps {
  studyList: StudySession[];  
  removeStudy: (id: string) => void;
}

export function StudyList({ studyList, removeStudy }: StudyListProps) {
  return (
    <>
      {studyList.map((value) => {
        return <StudyResume removeStudy={removeStudy} study={value} />;  
      })}
    </>
  );
}
