import { React, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
// import apiService from "../app/apiService";
import { AuthContext } from "../component/AuthProvider";
// import { BASE_URL } from "../app/config";
// import { tabScrollButtonClasses } from "@mui/material";

function LoginPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const fakeUser = {username:"abc",email:"123"}
  let from = location.state?.from?.pathname || "/";

  const { setAuth,auth } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    if (data.username === fakeUser.username && data.email === fakeUser.email){
      setAuth(data);
      navigate(from, { replace: true })
      // auth.isLoggedIn = "true"
    } else {
      alert("false")
    }
    // data?.username === fakeUser.username && data.email === fakeUser.email
    // navigate(from, { replace: true }):alert("false")
    // :alert("null")
    // console.log(BASE_URL);
    // fetchLogin(data);
    // await fetchLogin();
    // fetchResult ? navigate(from, { replace: true }) : alert("false");
  }

  // const fetchLogin = async (data) => {
  //   try {
  //     const res = await apiService.post(
  //       "/api/login",
  //       { data }
  //     );
  //     return res;
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };

  //onSubmit trigged fetch function, if successful will navigate to new page
  //if not return to homepage

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

// fetchLogin();
