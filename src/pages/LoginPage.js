import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../component/AuthProvider";
import { tabScrollButtonClasses } from "@mui/material";

function LoginPage({ redirect }) {
  const { auth, setAuth } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const fakeUser = { username: `abc`, email: `123` };

  const navigate = useNavigate();
  const onSubmit = data => {
    setAuth(data);
    console.log (fakeUser.username,"username")
    // console.log(auth, "1");
    // console.log(data, "2");


    data.username === fakeUser.username && data.email === fakeUser.email
    ?navigate(`${redirect}`)
    :console.log("false")
    // if (data.username === fakeUser.username && data.email === fakeUser.email) {
    //   navigate(`${redirect}`);
    // } else {
    //   navigate("/")
    // }
  };

  return (
    <div>
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
            {...register(
              "email"
              //  { required: true }
            )}
          />
          {/* {errors.email && <p>Email is required</p>} */}
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
    </div>
  );
}

export default LoginPage;

//  // const defaultValues = {
//   email: "morita@gmail.com",
//   password: "123",
//   remember: true,
// };
// tạo object defaultValues
// const methods = useForm({ defaultValues });
//cho func useForm nhận object defaultValues
//destructure methods

// const {
//   reset,
//   setError,
//   handleSubmit,
//   control,
//   formState: { error, isSubmitting },
// } = methods;

// const fetchLogin = async () => {
//   try {
//     const res = await axios.get("https://reqres.in/api/login", { onSubmit });
//     console.log(res);
//   } catch (error) {
//     console.log({ error });
//   }
// };
// fetchLogin();
