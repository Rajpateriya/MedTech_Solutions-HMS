import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import AddBeds from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddBeds";
import Add_Admin from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Admin";
import Add_Ambulance from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Ambulance";
import AddDoctor from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Doctor";
import Add_Nurse from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Nurse";
import Beds_Rooms from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Beds_Rooms";
import Check_Payment from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Check_Payment";
import AllReport from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/AllReport";
import Check_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Check_Appointment";
import Discharge_and_Create_Slip from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Discharge_and_Create_Slip";
import Doctor_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Doctor_Profile";
import Patient_Details from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Patient_Details";
import Add_Patient from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Add_Patient";
import Book_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Book_Appointment";
import Nurse_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Nurse_Profile";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";
import DRegister from "../Pages/Dashboard/Dashboard-Register/DRegister";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DRegister />} />
        <Route path="/login" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} />
        <Route path="/addoctor" element={<AddDoctor />} />
        <Route path="/addambulance" element={<Add_Ambulance />} />
        <Route path="/addnurse" element={<Add_Nurse />} />
        <Route path="/rooms" element={<Beds_Rooms />} />
        <Route path="/admin" element={<Add_Admin />} />
        <Route path="/addbeds" element={<AddBeds />} />
        
        <Route path="/reports" element={<AllReport />} />
        <Route path="/checkappointment" element={<Check_Appointment />} />
        <Route path="/createslip" element={<Discharge_and_Create_Slip />} />
        <Route path="/patientdetails" element={<Patient_Details />} />
        <Route path="/doctorprofile" element={<Doctor_Profile />} />
        
        <Route path="/addpatient" element={<Add_Patient />} />
        <Route path="/bookappointment" element={<Book_Appointment />} />
        <Route path="/nurseprofile" element={<Nurse_Profile />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
