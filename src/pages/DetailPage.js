// import React from "react";
// import { useParams, useLocation } from "react-router-dom";
// import { Container, Typography, Box } from "@mui/material";
// import jobs from "../jobs.json";

// function DetailPage() {
//   const params = useParams();
//   const jobId = params.id;
//   const job = jobs.find((job) => job.id === jobId);
//   const location = useLocation()
//   console.log(location, "detailLocation")

//   if (!job) {
//     return (
//       <Typography variant="h3" marginTop={3}>
//         Not found
//       </Typography>
//     );
//   }
//   return (
//     // <div>DetailPage {params.id}</div>
//     <Container sx={{ width: 900 }}>
//       <Typography state={{ backgroundLocation: location, from: location }} variant="h3" marginTop={3}>
//         {job.title}
//       </Typography>

//       <Box marginTop={3} sx={{ display: "flex" }}>
//         {/* <img src = {job.imageLink} alt = "" /> */}
//       </Box>
//     </Container>
//   );
// }

// export default DetailPage;
