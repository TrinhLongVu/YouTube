import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LinkPages } from "../src/Routes";
import DefaultLayout from "./Layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {LinkPages.map((LinkPage) => {
            const Page = LinkPage.component;
            const key = LinkPage.key;
            return (
              <Route
                key={key}
                path={LinkPage.path}
                element={
                  <DefaultLayout>
                      <Page />
                  </DefaultLayout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
