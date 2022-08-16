import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Grid";
import JobCard from "../component/JobCard";
// import { Outlet } from "react-router-dom";
// import jobs from "../jobs.json";


function HomePage({jobs,setRedirect}) {
  return (
    <Container>
      {/* <Outlet/> */}
      <Grid container spacing={2} mt={1}>
        {jobs.map((job) => (
          <Grid key ={Math.random()} item xs={12} md={4} lg={3}>
            <JobCard setRedirect = {setRedirect}  job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
