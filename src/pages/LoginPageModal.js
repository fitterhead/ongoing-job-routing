import { React, useContext } from "react";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "@mui/material/Modal";
// import apiService from "../app/apiService";
import { AuthContext } from "../component/AuthProvider";
// import { BASE_URL } from "../app/config";
// import { tabScrollButtonClasses } from "@mui/material";

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

function LoginPageModal() {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClose = () => {
    navigate(-1);
  };
  const fakeUser = { username: "abc", email: "123" };
  let from = location.state?.from?.pathname || "/";

  const { setAuth, auth } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.username === fakeUser.username && data.email === fakeUser.email) {
      console.log(location, "loginlocation");
      setAuth(data);
      navigate(from, { replace: true });
    } else {
      alert("false");
    }
  };
  //onSubmit trigged fetch function, if successful will navigate to new page
  //if not return to homepage

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box state={{ backgroundLocation: location }} sx={style}>
          <h1>LoginPageTitle</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                autoComplete="off"
                {...register("username")}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                autoComplete="off"
                // {...register("email", { required: true })}
                {...register("email")}
              />
            </div>
            <div>
              <label>
                <select {...register("language")}>
                  <option value="VN">VN</option>
                  <option value="EN">EN</option>
                  <option value="DE">DE</option>
                </select>
              </label>
            </div>
            <input type="submit" />
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default LoginPageModal;
