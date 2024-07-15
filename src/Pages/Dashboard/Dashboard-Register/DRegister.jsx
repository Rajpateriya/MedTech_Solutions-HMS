import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import "./DRegister.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  AdminRegister,
  DoctorRegister,
  NurseRegister,
} from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Drawer } from "antd";
const notify = (text) => toast(text);

const DRegister = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
  const [Loading, setLoading] = useState(false);
  const [placement, SetPlacement] = useState("Doctor");
  const [formvalue, setFormvalue] = useState({
    email: "",
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();

  const Handlechange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
  
    if (formvalue.ID !== "" && formvalue.password !== "") {
      let data;
      switch (placement) {
        case "Nurse":
          data = {
            ...formvalue,
            nurseID: formvalue.ID,
          };
          dispatch(NurseRegister(data))
            .then((res) => {
              if (res && res.message === "Registered") {
                notify("Registered Successfully");
                navigate("/login");
              } else {
                notify("Error: Please check your credentials and try again.");
              }
            })
            .catch((error) => {
              notify("Something went wrong. Please try again later.");
            });
          break;
        case "Doctor":
          data = {
            ...formvalue,
            docID: formvalue.ID,
          };
          dispatch(DoctorRegister(data)).then((res) => handleResponse(res));
          break;
        case "Admin":
          data = {
            ...formvalue,
            adminID: formvalue.ID,
          };
          dispatch(AdminRegister(data)).then((res) => handleResponse(res));
          break;
        default:
          break;
      }
    }
  };
  
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };

   
  return (
    <>
      <ToastContainer />
  
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <h1>Register</h1>
          <div>
            <Radio.Group
              value={placement}
              onChange={placementChange}
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
            <form onSubmit={HandleSubmit}>
              <h3>{placement} ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={Handlechange}
                required
              />
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={formvalue.email}
                onChange={Handlechange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={Handlechange}
                required
              />
              <button type="submit">
                {Loading ? "Loading..." : "Submit"}
              </button>
              {/* Already have an account? Login link */}
              <p style={{ marginTop: "10px" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "blue", cursor: "pointer" }}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default DRegister;
