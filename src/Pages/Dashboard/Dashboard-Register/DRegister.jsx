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

const notify = (text) => toast(text);

const DRegister = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [loading, setLoading] = useState(false);
  const [placement, setPlacement] = useState("Doctor");
  const [formvalue, setFormvalue] = useState({
    email: "",
    ID: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleResponse = (res) => {
    if (res && res.message === "Registered") {
      notify("Registered Successfully");
      navigate("/login");
    } else {
      notify("Error: Please check your credentials and try again.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
              handleResponse(res);
              setLoading(false);
            })
            .catch((error) => {
              notify("Something went wrong. Please try again later.");
              setLoading(false);
            });
          break;
        case "Doctor":
          data = {
            ...formvalue,
            docID: formvalue.ID,
          };
          dispatch(DoctorRegister(data))
            .then((res) => {
              handleResponse(res);
              setLoading(false);
            })
            .catch((error) => {
              notify("Something went wrong. Please try again later.");
              setLoading(false);
            });
          break;
        case "Admin":
          data = {
            ...formvalue,
            adminID: formvalue.ID,
          };
          dispatch(AdminRegister(data))
            .then((res) => {
              handleResponse(res);
              setLoading(false);
            })
            .catch((error) => {
              notify("Something went wrong. Please try again later.");
              setLoading(false);
            });
          break;
        default:
          break;
      }
    } else {
      setLoading(false);
    }
  };

  const placementChange = (e) => {
    setPlacement(e.target.value);
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
              className="radiogroup"
            >
              <Radio.Button value="Doctor" className="radiobutton">
                Doctor
              </Radio.Button>
              <Radio.Button value="Admin" className="radiobutton">
                Admin
              </Radio.Button>
              <Radio.Button value="Nurse" className="radiobutton">
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
                value={formvalue.ID}
                onChange={handleChange}
                required
              />
              <h3>Email</h3>
              <input
                type="email"
                name="email"
                value={formvalue.email}
                onChange={handleChange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={handleChange}
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Submit"}
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
