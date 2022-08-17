import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Typography, Box, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import jobs from "../jobs.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function DetailPageModal() {
  const params = useParams();
  const navigate = useNavigate()
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  const location = useLocation();
  const handleClose = () => {navigate(-1)}
  console.log(location, "detailLocation");
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);


  if (!job) {
    return (
      <Typography variant="h3" marginTop={3}>
        Not found
      </Typography>
    );
  }
  return (
    // <div>DetailPage {params.id}</div>

    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box state={{ backgroundLocation: location }} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {job.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {job.description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
export default DetailPageModal;

    // <Container sx={{ width: 900 }}>
    //   <Typography state={{ backgroundLocation: location, from: location }} variant="h3" marginTop={3}>
    //     {job.title}
    //   </Typography>

    //   <Box marginTop={3} sx={{ display: "flex" }}>
    //     {/* <img src = {job.imageLink} alt = "" /> */}
    //   </Box>
    // </Container>
