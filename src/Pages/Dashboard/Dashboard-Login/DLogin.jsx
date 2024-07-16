// import React, { useState } from "react";
// import { Radio } from "antd";
// import banner from "../../../img/banner.png";
// import admin from "../../../img/admin.jpg";
// import "./DLogin.css";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";

// import {
//   AdminLogin,
//   DoctorLogin,
//   forgetPassword,
//   NurseLogin,
// } from "../../../Redux/auth/action";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Drawer } from "antd";
// const notify = (text) => toast(text);

// const DLogin = () => {
//   const [open, setOpen] = useState(false);

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   // ************************************************
//   const [Loading, setLoading] = useState(false);
//   const [placement, SetPlacement] = useState("Doctor");
//   const [formvalue, setFormvalue] = useState({
//     ID: "",
//     password: "",
//   });
//   const dispatch = useDispatch();

//   const Handlechange = (e) => {
//     setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
//   };
//   const navigate = useNavigate();
//   const HandleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (formvalue.ID !== "" && formvalue.password !== "") {
//       let data = {
//         ...formvalue,
//         nurseID: placement === "Nurse" ? formvalue.ID : undefined,
//         docID: placement === "Doctor" ? formvalue.ID : undefined,
//         adminID: placement === "Admin" ? formvalue.ID : undefined,
//       };

//       try {
//         let loginAction;
//         if (placement === "Nurse") {
//           loginAction = NurseLogin(data);
//         } else if (placement === "Doctor") {
//           loginAction = DoctorLogin(data);
//         } else if (placement === "Admin") {
//           loginAction = AdminLogin(data);
//         }

//         const res = await dispatch(loginAction);

//         if (res.message === "Successful") {
//           notify("Login Successful");
//           setLoading(false);
//           navigate("/dashboard");
//         } else if (res.message === "Wrong credentials") {
//           notify("Wrong credentials");
//           setLoading(false);
//         } else {
//           notify("Something went Wrong, Please Try Again");
//           setLoading(false);
//         }
//       } catch (error) {
//         notify("Error occurred. Please try again.");
//         setLoading(false);
//       }
//     }
//   };

//   const placementChange = (e) => {
//     SetPlacement(e.target.value);
//   };

//   const [ForgetPassword, setForgetPassword] = useState({
//     type: "",
//     email: "",
//   });

//   const HandleForgetPassword = (e) => {
//     setForgetPassword({ ...ForgetPassword, [e.target.name]: e.target.value });
//   };

//   const [forgetLoading, setforgetLoading] = useState(false);

//   const HandleChangePassword = () => {
//     if (ForgetPassword.type === "") {
//       return notify("Please Fill all Details");
//     }
//     setforgetLoading(true);
//     dispatch(forgetPassword(ForgetPassword)).then((res) => {
//       if (res.message === "User not found") {
//         setforgetLoading(false);
//         return notify("User Not Found");
//       }
//       setForgetPassword({
//         type: "",
//         email: "",
//       });
//       onClose();
//       setforgetLoading(false);
//       return notify("Account Details Send");
//     });
//   };

//   return (
//     <>
//       <ToastContainer />

//       <div className="mainLoginPage">
//         <div className="leftside">
//           <img src={banner} alt="banner" />
//         </div>
//         <div className="rightside">
//           <h1>Login</h1>
//           <div>
//             <Radio.Group
//               value={placement}
//               onChange={placementChange}
//               className={"radiogroup"}
//             >
//               <Radio.Button
//                 key="doctor"
//                 value="Doctor"
//                 className={"radiobutton"}
//               >
//                 Doctor
//               </Radio.Button>
//               <Radio.Button key="admin" value="Admin" className={"radiobutton"}>
//                 Admin
//               </Radio.Button>
//               <Radio.Button key="nurse" value="Nurse" className={"radiobutton"}>
//                 Nurse
//               </Radio.Button>
//             </Radio.Group>
//           </div>
//           <div className="Profileimg">
//             <img src={admin} alt="profile" />
//           </div>
//           <div>
//             <form onSubmit={HandleSubmit}>
//               <h3>{placement} ID</h3>
//               <input
//                 type="number"
//                 name="ID"
//                 value={formvalue.ID}
//                 onChange={Handlechange}
//                 required
//               />
//               <h3>Password</h3>
//               <input
//                 type="password"
//                 name="password"
//                 value={formvalue.password}
//                 onChange={Handlechange}
//                 required
//               />
//               <button type="submit">{Loading ? "Loading..." : "Submit"}</button>
//               <p style={{ marginTop: "10px" }}>
//                 Forget Password?{" "}
//                 <span
//                   style={{ color: "blue", cursor: "pointer" }}
//                   onClick={showDrawer}
//                 >
//                   Get it on Email !
//                 </span>
//               </p>

//               {/* Don't have an account? Register link */}
//               <p style={{ marginTop: "10px" }}>
//                 Already have an account?{" "}
//                 <Link to="/" style={{ color: "blue", cursor: "pointer" }}>
//                   Register
//                 </Link>
//               </p>

//               {/* ********************************************************* */}
//               <Drawer
//                 title="Forget Password"
//                 placement="left"
//                 onClose={onClose}
//                 open={open}
//               >
//                 <div>
//                   <label style={{ fontSize: "18px" }}>Choose Type</label>

//                   <select
//                     name="type"
//                     value={ForgetPassword.type}
//                     onChange={HandleForgetPassword}
//                     required
//                   >
//                     <option value="">User Type</option>
//                     <option value="nurse">Nurse</option>
//                     <option value="doctor">Doctor</option>
//                     <option value="admin">Admin</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label style={{ display: "block", fontSize: "18px" }}>
//                     Enter Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="example@mail.com"
//                     name="email"
//                     value={ForgetPassword.email}
//                     onChange={HandleForgetPassword}
//                     required
//                     style={{
//                       width: "100%",
//                       height: "3rem",
//                       borderRadius: "5px",
//                       border: "none",
//                       backgroundColor: "#bce0fb",
//                       fontSize: "18px",
//                       marginTop: "10px",
//                       paddingLeft: "10px",
//                     }}
//                   />
//                 </div>

//                 <button
//                   style={{
//                     width: "50%",
//                     margin: " 20px auto",
//                     display: "flex",
//                     padding: "10px",
//                     fontSize: "18px",
//                     backgroundColor: "#ff9f9f",
//                     border: "none",
//                     borderRadius: "7px",
//                     cursor: "pointer",
//                     justifyContent: "center",
//                   }}
//                   onClick={HandleChangePassword}
//                 >
//                   {forgetLoading ? "Loading..." : " Send Mail"}
//                 </button>
//               </Drawer>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DLogin;

import React, { useState } from "react";
import { Radio, Drawer } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import "./DLogin.css";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AdminLogin,
  DoctorLogin,
  forgetPassword,
  NurseLogin,
} from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (text) => toast(text);

const DLogin = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [placement, setPlacement] = useState("Doctor");
  const [formValue, setFormValue] = useState({ ID: "", password: "" });
  const [forgetPasswordDetails, setForgetPasswordDetails] = useState({
    type: "",
    email: "",
  });
  const [forgetLoading, setForgetLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formValue.ID && formValue.password) {
      const data = {
        ...formValue,
        nurseID: placement === "Nurse" ? formValue.ID : undefined,
        docID: placement === "Doctor" ? formValue.ID : undefined,
        adminID: placement === "Admin" ? formValue.ID : undefined,
      };

      try {
        let loginAction;
        if (placement === "Nurse") loginAction = NurseLogin(data);
        else if (placement === "Doctor") loginAction = DoctorLogin(data);
        else if (placement === "Admin") loginAction = AdminLogin(data);

        const res = await dispatch(loginAction);

        if (res.message === "Successful") {
          notify("Login Successful");
          setTimeout(() => navigate("/dashboard"), 1000); // Short delay before navigating
        } else if (res.message === "Wrong credentials") {
          notify("Wrong credentials");
        } else {
          notify("Something went wrong, please try again.");
        }
      } catch (error) {
        notify("Error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      notify("Please fill in all fields.");
    }
  };

  const handleForgetPasswordChange = (e) => {
    setForgetPasswordDetails({
      ...forgetPasswordDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePassword = () => {
    if (!forgetPasswordDetails.type || !forgetPasswordDetails.email) {
      return notify("Please fill in all details.");
    }

    setForgetLoading(true);
    dispatch(forgetPassword(forgetPasswordDetails)).then((res) => {
      setForgetLoading(false);
      if (res.message === "User not found") {
        return notify("User not found.");
      }
      setForgetPasswordDetails({ type: "", email: "" });
      setOpen(false);
      notify("Account details sent.");
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={(e) => setPlacement(e.target.value)}
              className={"radiogroup"}
            >
              <Radio.Button value="Doctor" className={"radiobutton"}>
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className={"radiobutton"}>
                Admin
              </Radio.Button>
              <Radio.Button value="Nurse" className={"radiobutton"}>
                Nurse
              </Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <h3>{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formValue.ID}
                onChange={handleChange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formValue.password}
                onChange={handleChange}
                required
              />
              <button type="submit">{loading ? "Loading..." : "Submit"}</button>
              <p style={{ marginTop: "10px" }}>
                Forget Password?{" "}
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => setOpen(true)}
                >
                  Get it on Email!
                </span>
              </p>
              <p style={{ marginTop: "10px" }}>
                Don't have an account?{" "}
                <Link to="/" style={{ color: "blue", cursor: "pointer" }}>
                  Register
                </Link>
              </p>
              <Drawer
                title="Forget Password"
                placement="left"
                onClose={() => setOpen(false)}
                open={open}
              >
                <div>
                  <label style={{ fontSize: "18px" }}>Choose Type</label>
                  <select
                    name="type"
                    value={forgetPasswordDetails.type}
                    onChange={handleForgetPasswordChange}
                    required
                  >
                    <option value="">User Type</option>
                    <option value="nurse">Nurse</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "18px" }}>
                    Enter Email
                  </label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    name="email"
                    value={forgetPasswordDetails.email}
                    onChange={handleForgetPasswordChange}
                    required
                    style={{
                      width: "100%",
                      height: "3rem",
                      borderRadius: "5px",
                      border: "none",
                      backgroundColor: "#bce0fb",
                      fontSize: "18px",
                      marginTop: "10px",
                      paddingLeft: "10px",
                    }}
                  />
                </div>
                <button
                  style={{
                    width: "50%",
                    margin: " 20px auto",
                    display: "flex",
                    padding: "10px",
                    fontSize: "18px",
                    backgroundColor: "#ff9f9f",
                    border: "none",
                    borderRadius: "7px",
                    cursor: "pointer",
                    justifyContent: "center",
                  }}
                  onClick={handleChangePassword}
                >
                  {forgetLoading ? "Loading..." : "Send Mail"}
                </button>
              </Drawer>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;

