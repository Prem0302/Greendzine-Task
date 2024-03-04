import BottomBar from "./BottomBar";
import { EmployeeData } from "./EmployeeData";
import { SearchBar } from "./Search";
import { useState } from "react";
import { Header } from "./components/Header";

export default function User() {
  const [userdata, setuserData] = useState("");
 
  return (
    <>
        <Header/>
        <SearchBar setuserData={setuserData}/>
        <EmployeeData userdata = {userdata} setuserData = {setuserData}/>

      

      <BottomBar />
    </>
  );
}
