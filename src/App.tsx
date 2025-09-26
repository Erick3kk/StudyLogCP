import { lazy, Suspense, useCallback, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Fallback } from "./components/fallback";
import { Layout } from "./components/layout";
import { Loading } from "./components/loading";
import type { StudySession } from "./types/study";
 
const Home = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Home }))
);
 
const NotFound = lazy(() =>
  import("./pages/not-found").then((m) => ({ default: m.NotFound }))
);
 
const AddStudy = lazy(() =>
  import("./pages/add-study").then((m) => ({ default: m.AddStudy }))
);
 
const StudyDetails = lazy(() =>
  import("./pages/study-details").then((m) => ({ default: m.StudyDetails }))
);
 
function App() {
  const [studies, setStudies] = useState<StudySession[]>([]);
 
  const removeStudy = useCallback((id: string) => {
    const studyToDelete = studies.findIndex((value) => {
      return value.id === id;
    });
 
    const updatedStudies = [...studies];
 
    updatedStudies.splice(studyToDelete, 1);
 
    setStudies(updatedStudies);
  }, []);
 
 
  const addStudy = useCallback((study: StudySession) => {
    setStudies((prev) => [...prev, study]);
  }, []);
 
  return (
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={Fallback}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <Home studies={studies} removeStudy={removeStudy} />
                }
              />
              <Route
                path="/add"
                element={<AddStudy onAdd={addStudy} studies={studies} />}
              />
              <Route path="/study/:id" element={<StudyDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
 
export default App;