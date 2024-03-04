import React, { useEffect, useState } from 'react'
import { employee } from './Data'


export const EmployeeData = (props) => {

    const[showData,setShowData] = useState(employee);

    const userdata = props.userdata;
    const setuserData = props.setuserData;

    const dofunc = () => {
        const filteredEmployees = employee.filter(emp => emp.empName.toLowerCase() === userdata.toLowerCase());
        if(filteredEmployees.length > 0){
            console.log(filteredEmployees);
            setShowData(filteredEmployees);
        }else{
            setShowData(employee);
            setuserData("");
        }
    }

    useEffect(() => {
        dofunc();
    },[userdata])

  return (
    <div className='empMain'>
        <div className='holder-container'>
            {
                userdata !== "" ? 
                (
                    <>
                        {
                            showData.map((data,index) => (
                                <div key={index} className={`${index % 2 === 0 ? 'dataholder even' : 'dataholder odd'}`}>
                                    <div className='empData'>
                                        <div className='core-data-left'>
                                            <p className='emp-left'>EMP ID</p>
                                            <p className='emp-left'>Name</p>
                                            <p className='emp-left'>DOB</p>
                                            <p className='emp-left'>Role</p>
                                        </div>
                                        <div className='core-data-middle'>
                                            <p className='colon'>:</p>
                                            <p className='colon'>:</p>
                                            <p className='colon'>:</p>
                                            <p className='colon'>:</p>
                                        </div>
                                        <div className='core-data-right'>
                                            <p className='Id'>{showData[index].empId}</p>
                                            <p className='name'>{showData[index].empName}</p>
                                            <p className='dob'>{showData[index].dob}</p>
                                            <p className='role'>{showData[index].role}</p>
                                        </div>
                                    </div>
                                    <div className='rightno'>
                                        <p className='no-text'>{showData[index].empId}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                ) :
                (
                    <>
                    {
                        showData.map((data,index) => (
                            <div key={index} className={`${index % 2 === 0 ? 'dataholder even' : 'dataholder odd'}`}>
                                    <div className='empData'>
                                        <div className='core-data-left'>
                                            <p className='emp-left'>EMP ID</p>
                                            <p className='emp-left'>Name</p>
                                            <p className='emp-left'>DOB</p>
                                            <p className='emp-left'>Role</p>
                                        </div>
                                        <div className='core-data-middle'>
                                            <p className='colon'>:</p>
                                            <p className='colon'>:</p>
                                            <p className='colon'>:</p>
                                            <p className='colon'>:</p>
                                        </div>
                                        <div className='core-data-right'>
                                            <p className='Id'>{employee[index].empId}</p>
                                            <p className='name'>{employee[index].empName}</p>
                                            <p className='dob'>{employee[index].dob}</p>
                                            <p className='role'>{employee[index].role}</p>
                                        </div>
                                    </div>
                                    <div className='rightno'>
                                        <p className='no-text'>{employee[index].empId}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
                
            }
        </div>
    </div>
  )
}