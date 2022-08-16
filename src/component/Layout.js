import { Outlet, Link } from "react-router-dom";
import { Container } from "@mui/material";
import PaginationSize from "./PaginationSize";
import SearchAppBar from "./SearchAppBar";

export function Layout({ page, handleChange, pageCount }) {
  return (
    <>
      <SearchAppBar />
      <Link to="/">homepage</Link> | <Link to="/loginpage">loginpage</Link>
      <Outlet />
      <Container sx={{ p: 2 }}>
        <PaginationSize
          page={page}
          handleChange={handleChange}
          pageCount={pageCount}
        />
      </Container>
    </>
  );
}
