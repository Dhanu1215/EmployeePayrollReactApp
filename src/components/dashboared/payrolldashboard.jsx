import React from 'react';
import "./payrolldashboard.css"
function Payrolldashboard() {
  return(
        <div>
            <body>
                <header className="header-content header">
                    <div className="logo-content">
                        <img src="C:\Users\praja\Desktop\ReactJS\employee-payroll\src\assets\img.png"/>
                        <div>
                        <span className="emp-text">EMPLOYEE</span><br></br>
                        <span className="emp-text emp-payroll">PAYROLL</span>
                        </div>
                    </div>
                </header>
                <div className='main-content'>
                    <div className='main'>
                        <h1 className='form-head'>Employee Details 
                            <button className='adduser'>
                            <a href= ".\payrollForm\payrollForm.jsx" className="add-button">
                            <img src= ".\icons\add-24px.svg" alt=""/>+Add user</a>
                            </button>
                        </h1>
                    </div>
                    <div className='table-content'>
                        
                    </div>
                </div>
            </body>
        </div>
  )
}
export default Payrolldashboard