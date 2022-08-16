import React from "react";
import HomePage from "./pages/HomePage";
// import DetailPage from "./pages/DetailPage";
import { Routes, Route } from "react-router-dom";
import jobs from "./jobs.json";
// import { Box } from "@mui/system";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import { Layout } from "./component/Layout";
import RequiredAuth from "./component/RequireAuth";

function App() {
  const [page, setPage] = React.useState(1);
  const handleChange = (e, v) => {
    setPage(v);
  };
  const newArray = jobs.slice((page - 1) * 5, (page - 1) * 5 + 5);
  const pageCount = Math.round(jobs.length / 5);
  console.log(newArray, "new Array");
  console.log(pageCount, "count");
  console.log(page, "count");
  // console.log(redirect, "redirect");

  return (
      <Routes>
        <Route
          path="/*"
          element={
            <Layout
              newArray={newArray}
              pageCount={pageCount}
              page={page}
              handleChange={handleChange}
            />
          }
        >
          <Route index element={<HomePage jobs={newArray} />} />
          <Route
            path="loginpage"
            element={<LoginPage />}
          />
          <Route element={<RequiredAuth />}>
            <Route path=":id" element={<DetailPage />} />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;

/* <Routes>
        <Route path="/" element={<HomePage jobs={newArray} />} />
        <Route path="/book/:id" element={<LoginPage />} />
        <Route path="/book/:id" element={<DetailPage />} />
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes> */

/* <Routes>
        <Route path="/" element={<HomePage jobs={newArray} />} />
        <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes> */
