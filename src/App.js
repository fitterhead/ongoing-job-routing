import React from "react";
import HomePage from "./pages/HomePage";
// import DetailPage from "./pages/DetailPage";
import { Routes, Route, Link } from "react-router-dom";
import jobs from "./jobs.json";
import { Box } from "@mui/system";
import DetailPage from "./pages/DetailPage";
import LoginPage from "./pages/LoginPage";
import { Layout } from "./component/Layout";
import RequiredAuth from "./component/RequireAuth";

function App() {
  const [page, setPage] = React.useState(1);
  const [redirect, setRedirect] = React.useState(null);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const newArray = jobs.slice((page - 1) * 5, (page - 1) * 5 + 5);
  const pageCount = Math.round(jobs.length / 5);
  console.log(newArray, "new Array");
  console.log(pageCount, "count");
  console.log(page, "count");
  console.log(redirect, "redirect");

  const fixedUser = { email: `abc`, password: `123` };

  return (
    <Box>
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
          <Route
            index
            element={<HomePage setRedirect={setRedirect} jobs={newArray} />}
          />
          <Route path="loginpage" element={<LoginPage redirect={redirect} fixedUser={fixedUser} />} />
          <Route
            element={<RequiredAuth redirect={redirect} fixedUser={fixedUser} />}
          >
            <Route path=":id" element={<DetailPage />} />
          </Route>
        </Route>
      </Routes>
    </Box>
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
