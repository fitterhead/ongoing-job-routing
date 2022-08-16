import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";

// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Container } from "@mui/system";

export default function JobCard({ job, setRedirect }) {
  const navigate = useNavigate();
  // const location = useLocation()
  return (
    <Card
    // onClick={() => navigate(`/loginpage`)}
    >
      <CardActionArea>
        <CardContent sx={{ height: `12rem` }}>
          <Typography gutterBottom variant="h5" component="div">
            {job.title}
            <Box>
              {" "}
              {job.skills.map((skill) => (
                <Chip
                  key={Math.random()}
                  label={skill}
                  sx={{
                    height: `1rem`,
                    fontSize: `0.7rem`,
                    backgroundColor: `#912F40`,
                    color: `white`,
                  }}
                />
              ))}
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {job.description}
          </Typography>
        </CardContent>
        <Container sx={{ width: `12rem`, p: 2 }}>
          <Button
            onClick={() => {
              navigate(`/${job.id}`);
              setRedirect(`/${job.id}`);
            }}
            variant="contained"
          >
            LEARN MORE
          </Button>
          {/* <Button onClick = {(e) => navigate(`/${job.id}`)} variant="contained">LEARN MORE</Button> */}
        </Container>
      </CardActionArea>
    </Card>
  );
}

// sx ={{'.css-1pdv52s-MuiContainer-root':{display:`flex`}}}
